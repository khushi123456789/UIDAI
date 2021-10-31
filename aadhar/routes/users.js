import express from 'express';


const router = express.Router();

const users =[];

const special=[ "purani", "new", "old", "navi","uttar"];

router.get('/',(req,res)=>
{
    //res.send(users);
    res.send("Hello!!");
});

router.post('/',(req,res)=>{
    const user = req.body;
    users.push(user);
    const addr = new Set();
    var i;
    var j;
     var ahba = user.house_building_apartment.split(/[\s,]+/).join(',').split('-').join(',').split(',');
     var asrl = user.street_road_lane.split(/[\s,]+/);
     var aals = user.area_locality_sector.split(/[\s,]+/);
     var land = user.landmark.split(/[\s,]+/);
     var avtc = user.village_town_city.split(/[\s,]+/);
     var asub = user.subDistrict.split(/[\s,]+/); 
     var dis = user.district.split('=').join(',').split(':').join(',').split('-').join(',').split(',');
     var st = user.state.split(/[\s,]+/);

    // addr = addr.concat(user.house_building_apartment);
    // // console.log(addr);
    // addr = addr.concat(",");
    
    for(i=0;i<ahba.length;i++)
    addr.add(ahba[i].toLowerCase().replace(/\s+/g, ''));

    for(i=0;i<asrl.length;i++)
    addr.add(asrl[i].toLowerCase().replace(/\s+/g, ''));

    for(i=0;i<aals.length;i++)
    {
        // for(j=0;j<special.length;j++)
        // {
        //     if(special[j] == aals[i].toLowerCase())
        //     {
        //         console.log("I'm here Ayushh!");
        //         aals[i]=aals[i].concat("-").concat(aals[i+1]);
        //         addr.add(aals[i].toLowerCase()); 
        //         break;  
        //     }
                 
        // }
        addr.add(aals[i].toLowerCase().replace(/\s+/g, ''));
    }

    for(i=0;i<land.length;i++)
    addr.add(land[i].toLowerCase().replace(/\s+/g, ''));

    for(i=0;i<avtc.length;i++)
    addr.add(avtc[i].toLowerCase().replace(/\s+/g, ''));
    
    for(i=0;i<asub.length;i++)
    addr.add(asub[i].toLowerCase().replace(/\s+/g, ''));

    for(i=0;i<dis.length;i++)
    addr.add(dis[i].toLowerCase().replace(/\s+/g, ''));

    
    addr.add(user.pincode);

    for(i=0;i<st.length;i++)
    addr.add(st[i].toLowerCase());


    // console.log(addr);
    const myArr = Array.from(addr);
    console.log(myArr[0]);
    
    var final ="";
    for(i=0;i<myArr.length;i++)
    {
        final = final.concat(myArr[i]);
        final = final.concat(" ");
    }

    
   
res.send(final);
      
});
// const check = new Set();
// check.add("Hey");
// check.add("hey");
// console.log(check.next());



export default router;
