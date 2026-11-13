/* Original photos are stored separately from inspection-state.js in IndexedDB.
   Files are never resized, recompressed, or sent to a server by this module. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.InspectionPhotos=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const DATABASE='sunnie-inspection-original-photos',STORE='photos';
function create(indexedDB,makeId){
 if(!indexedDB)throw Error('Photo storage is not supported by this browser.');
 let opening;
 function open(){
  if(opening)return opening;
  opening=new Promise((resolve,reject)=>{
   const req=indexedDB.open(DATABASE,1);
   req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('draftId','draftId',{unique:false});}};
   req.onsuccess=()=>resolve(req.result);
   req.onerror=()=>reject(req.error||Error('Photo storage could not open.'));
   req.onblocked=()=>reject(Error('Close other tabs using the photo library and try again.'));
  }).catch(err=>{opening=null;throw err;});
  return opening;
 }
 function transaction(mode,work){
  return open().then(db=>new Promise((resolve,reject)=>{
   let tx,result;
   try{tx=db.transaction(STORE,mode);result=work(tx.objectStore(STORE));}
   catch(err){reject(err);return;}
   tx.oncomplete=()=>resolve(result&&result.value!==undefined?result.value:result);
   tx.onerror=()=>reject(tx.error||Error('Photo storage failed.'));
   tx.onabort=()=>reject(tx.error||Error('Photo storage was canceled.'));
  }));
 }
 async function list(draftId){
  if(!draftId)throw Error('Missing inspection draft.');
  const db=await open();
  return new Promise((resolve,reject)=>{
   const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).index('draftId').getAll(draftId);
   req.onsuccess=()=>resolve(req.result.sort((a,b)=>a.added-b.added));
   req.onerror=()=>reject(req.error||Error('Could not load saved photos.'));
   tx.onabort=()=>reject(tx.error||Error('Could not load saved photos.'));
  });
 }
 async function add(draftId,files){
  if(!draftId)throw Error('Missing inspection draft.');
  const originals=Array.from(files||[]);
  if(!originals.length)return 0;
  for(const f of originals){
   if(!f||typeof f.name!=='string'||typeof f.size!=='number'||!((f.type||'').startsWith('image/')||/\.(heic|heif|jpg|jpeg|png|webp|gif|tif|tiff|bmp|avif)$/i.test(f.name)))throw Error('Choose image files only.');
  }
  const id=makeId||(()=>typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():'photo-'+Date.now()+'-'+Math.random().toString(36).slice(2));
  await transaction('readwrite',store=>{
   originals.forEach(file=>store.add({id:id(),draftId,name:file.name,type:file.type||'application/octet-stream',size:file.size,lastModified:file.lastModified||null,added:Date.now(),blob:file}));
  });
  return originals.length;
 }
 function remove(id,draftId){
  if(!id||!draftId)throw Error('Missing photo or draft.');
  return transaction('readwrite',store=>{
   const req=store.get(id);
   req.onsuccess=()=>{if(req.result&&req.result.draftId===draftId)store.delete(id);};
  });
 }
 return {open,list,add,remove};
}
return {DATABASE,STORE,create};
});
