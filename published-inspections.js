/* Published owner inspections are loaded separately from private drafts.
   Photo URLs are short-lived links issued only for published records. */
(async function(){
 const coords={
  'Shultz Dog Park':{lat:42.6452,lng:-86.18917,address:'301 Riverview Dr, Douglas, MI 49406',note:'Approximate pin at Schultz Park; dog park gate not independently mapped'},
  'Tails & Trails':{lat:42.666,lng:-86.169647,address:'6359 134th Ave, Saugatuck, MI 49453',note:'Published park location'},
  'Dog Park at Van Raalte Farm Park':{lat:42.77603,lng:-86.06518,address:'975 E 24th St, Holland, MI 49423',note:'Approximate south entrance to Van Raalte Farm; dog park gate not independently mapped'},
  'Quincy Dog Park':{lat:42.845102,lng:-86.135197,address:'4260 144th Ave, Holland, MI 49424',note:'Approximate large dog park location'}
 };
 const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 try{
  const response=await fetch('https://dqkbblmyrjmwmepjlenj.supabase.co/functions/v1/public-published-parks',{cache:'no-store'});
  if(!response.ok)throw Error('Published park service unavailable');
  const records=await response.json();
  if(!Array.isArray(records))throw Error('Unexpected published park response');
  for(const record of records){
   const pin=coords[record.name];if(!pin)continue;
   const section=record.inspection?.sections||{};
   const basic=Object.entries(section).find(([k])=>k.startsWith('1 of 4'))?.[1]||{};
   const amenities=Object.entries(section).find(([k])=>k.startsWith('2 of 4'))?.[1]||{};
   const parking=Object.entries(section).find(([k])=>k.startsWith('3 of 4'))?.[1]||{};
   const final=Object.entries(section).find(([k])=>k.startsWith('4 of 4'))?.[1]||{};
   if(basic.Admission!=='Free')continue;
   const rating=Number(final['Sunnie’s rating']);
   const info=['Field inspected by Deb and Sunnie',basic['Dog areas'],basic['Small-dog weight limit']?'Small dogs: '+basic['Small-dog weight limit']:'',basic['Double-gated entry']==='Yes'?'Double gated':'',basic.notes,final.notes].filter(Boolean).map(escape).join(' • ');
   const photoList=(record.photos||[]).filter(p=>typeof p.src==='string'&&p.src.startsWith('https://')).map(p=>({src:p.src.replace(/&/g,'&amp;').replace(/"/g,'%22'),alt:escape(p.alt)}));
   const park={
    name:escape(record.name),parkType:escape(basic['Park setting']||'Public Dog Park'),lat:pin.lat,lng:pin.lng,
    status:'free',statusLabel:'🟢 FIELD VERIFIED FREE',offleash:true,
    fenced:basic.Fencing==='Fully fenced',lighted:amenities.Lighting==='Good',
    separated:basic['Dog areas']==='Separate small / large',rv:true,
    parking:escape((parking.Parking||'')+' · '+(parking['Parking spaces']||'')+' · Max '+(parking['Largest vehicle']||'unknown')),
    water:escape(amenities['Drinking water']||'Unknown'),wasteBags:escape(amenities['Poop bags']||'Unknown'),
    hours:escape(basic.Hours==='Posted hours — add in notes'?basic.notes:basic.Hours||'Unknown'),
    location:pin.address,coordinateSource:pin.note,info,
    visitorRating:Number.isFinite(rating)?rating:null,rating:Number.isFinite(rating)?rating:null,
    sunniesFavorite:final['Sunnie’s Favorite']==='Yes',ownersFavorite:final['Sunnie’s Favorite']==='Yes',
    lastVerified:'November 17, 2026',fieldVerified:true,verificationMethod:'Firsthand owner inspection',
    maintenance:escape(final.Maintenance||'Unknown'),photos:photoList,
    warning:escape([amenities['Drinking water']==='Absent'?'No drinking water':'',amenities.Shade==='None'?'No shade':'',parking['Parking spaces']==='Very limited'?'Very limited parking':''].filter(Boolean).join(' • '))
   };
   const existing=parks.findIndex(p=>p.name===park.name);
   if(existing>=0)parks[existing]=park;else parks.push(park);
  }
  renderMarkers(false);
 }catch(e){console.warn('Published inspections could not be loaded',e);}
})();