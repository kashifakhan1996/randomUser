import React,{useState} from "react";
import './RandomResultsRow.css'
import fetchRandomData from './fetchRandomData.js'
//import noImage from 

function RandomResultsRow(props) {
    //const person = props.randomData
    const [person, setPerson] = useState([])//useState(props.randomData);
    React.useEffect(() => {
    
      fetchRandomData().then(newperson => {
            setPerson(newperson[0]?newperson[0]:[])
          
      })
      
    },[setPerson]) 

    const handleEvent = (e) =>{
        e.stopPropagation()
        fetchRandomData().then(newperson => {         
            setPerson(newperson[0]?newperson[0]:[])
                   
        })
    }

    if(typeof person.dob!=='undefined'){
      var date = new Date(person.dob.date);
      date = date.getDate()+'/'+date.getFullYear()+'/' + (date.getMonth()+1);
    }

    if(typeof person.name!=='undefined'){
      var name = ''
      Object.keys(person.name).forEach(function(value,index) {        
           // add all sizes to string
            name += person.name[value] + ' ';
      });
    }

    var location = person.location||{test:"test"}

    return (
      <>
        <div className={`card_light`}>
          <div className="frame">
            <img className="profile" src={(person.picture)?person.picture.large:''} alt="profile" />
          </div>
          <div>
            <h4 className={`name_light`}>{(name)?name:''}</h4>
            <p className="email">{(person.email)?person.email:''}</p>
            <p className="gender">{(person.gender)?person.gender:''}</p>
            <p className="designation">{(date)?date:''}</p>
            {
              Object.keys(location).forEach(function(value,index) {        
                    if(value==='street'){
                      var street = location[value]
                      Object.keys(street).forEach(function(streetvalue,streetindex) {
                          <p className="gender">{streetvalue+":"+street[streetvalue]}</p>
                      })
                    }
                    <p className="gender">{(value=='street')?(value+":"+location[value]):''}</p>
              })
            }

            { Object.keys(location).map((value, i) => (
                
                (value==='coordinates' || value==='timezone' || value==='street')?'':<p className="gender">{value+":"+location[value]}</p>
                
            ))}
            
            <button className="card-button" onClick={handleEvent}>
              New User<i className='fas fa-sync-alt' style={{fontSize:'26px'}}></i>
            </button>
            <div className="togggle" />
          </div>
        </div>
      </>
    );

    
}

export default RandomResultsRow

