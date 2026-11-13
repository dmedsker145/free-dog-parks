const test=require('node:test'),assert=require('node:assert/strict'),Photos=require('./inspection-photos');
function fakeDB(){
 const rows=new Map();
 function request(tx,fn){const req={};tx.pending++;queueMicrotask(()=>{try{req.result=fn();req.onsuccess?.();}catch(e){req.error=e;req.onerror?.();tx.onerror?.();}finally{tx.pending--;if(tx.pending===0)queueMicrotask(()=>{if(tx.pending===0)tx.oncomplete?.();});}});return req;}
 function store(tx){return {add:v=>request(tx,()=>{rows.set(v.id,v);}),get:id=>request(tx,()=>rows.get(id)),delete:id=>request(tx,()=>rows.delete(id)),index:()=>({getAll:id=>request(tx,()=>[...rows.values()].filter(x=>x.draftId===id))})};}
 const db={transaction:()=>{const tx={pending:0,objectStore:()=>store(tx)};return tx;}};
 return {open:()=>{const req={result:db};queueMicrotask(()=>req.onsuccess?.());return req;},rows};
}
let serial=0;const id=()=>String(++serial);
const file=(name,bytes,type='image/jpeg')=>({name,size:bytes.length,type,lastModified:123,bytes});
test('original bytes and filenames persist per draft across instances',async()=>{
 const db=fakeDB(),a=Photos.create(db,id);
 await a.add('park-1',[file('original.jpg','unmodified-original'),file('other.jpg','raw-2')]);
 await a.add('park-2',[file('other-park.jpg','different')]);
 const b=Photos.create(db,id),first=await b.list('park-1'),second=await b.list('park-2');
 assert.equal(first.length,2);assert.equal(second.length,1);
 assert.equal(first[0].name,'original.jpg');assert.equal(first[0].blob.bytes,'unmodified-original');
 assert.equal(second[0].blob.bytes,'different');
});
test('removal is restricted to the matching draft',async()=>{
 const db=fakeDB(),s=Photos.create(db,id);
 await s.add('park-1',[file('photo.jpg','raw')]);const photo=(await s.list('park-1'))[0];
 await s.remove(photo.id,'park-2');assert.equal((await s.list('park-1')).length,1);
 await s.remove(photo.id,'park-1');assert.equal((await s.list('park-1')).length,0);
});
test('reject non-images without changing saved photos',async()=>{
 const db=fakeDB(),s=Photos.create(db,id);
 await s.add('park-1',[file('photo.heic','raw','')]);
 await assert.rejects(()=>s.add('park-1',[file('bad.exe','raw','application/octet-stream')]));
 assert.equal((await s.list('park-1')).length,1);
});
test('reject missing draft and unsupported storage',async()=>{
 assert.throws(()=>Photos.create(null),/not supported/);
 const db=fakeDB(),s=Photos.create(db,id);
 await assert.rejects(()=>s.add('',[file('x.jpg','raw')]),/Missing inspection/);
 await assert.rejects(()=>s.list(''),/Missing inspection/);
});
