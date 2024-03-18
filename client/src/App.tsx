import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const API_URL = 'http://api:3001' 

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("ruleta-a");
  const [user, setUser] = useState<any>({});
  const [priceNumber, setPriceNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const queryParameters = new URLSearchParams(window.location.search)
  const userId = queryParameters.get("userId") || 1

  const loadRoullete = (slug: string = 'ruleta-a') => {
    fetch(`${API_URL}/roulletes/${slug}/`)
      .then((res: any) => {
        res.json().then((r: any) => {
          const options = r.roulleteToProps.map(
            (el: any) => {
              return {
                option: el.prop.readableName,
                style: {
                  backgroundColor: el.prop.colour
                }
              }
          })
          setPrice(r.price);
          setData(options)
          console.log(options);
        });
      })
  }
  const loadUser = () => {
    fetch(`${API_URL}/users/${userId}/`)
      .then((data) => {
        data.json().then((user) => { setUser(user); console.log(user) });
      })
  }

  const getCreditReward = () => {
    fetch(`${API_URL}/users/getCreditReward/${userId}`)
    .then((data) => {
      data.json().then( el => {
        alert(el?.message ?? "something bad happened");
        loadUser();
      }).catch(err => alert("something bad happened"));
    })
  }
  useEffect(() => {
    getCreditReward();
    loadRoullete();
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      fetch(`${API_URL}/roulletes/${selectedOption}/play/${userId}/`)
      .then((data:any) => {
        data.json().then((res:any) => { 
          console.log(res);
          alert(res.message ?? "an error has ocurred")
          if(res.index) setPriceNumber(res.index);
          loadUser();
        });
      })
     
      setMustSpin(true);
    }
  }

  const handleChangeRoullete = (slug: string) => {
    loadRoullete(slug);
    setSelectedOption(slug);
  }

  return (
    <>
      <div>
        <p>usuario {user?.username ?? 'n/a'} con {user?.credits ?? 0} créditos</p>
        {user.__propBaskets__?.map((element:any) => {
          return <><p>{element.prop.readableName}: {element.quantity}</p></>
        })}
      </div>
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="ruleta-a" checked={selectedOption === 'ruleta-a'} onChange={(event) => { handleChangeRoullete(event.target.value) }} />
            Ruleta A
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="ruleta-b" checked={selectedOption === 'ruleta-b'} onChange={(event) => { handleChangeRoullete(event.target.value) }} />
            Ruleta B
          </label>
        </div>
      </form>
      <div>
        {
          data?.length > 1 &&
          (
            <>
              <p>Precio de la ruleta: {price}</p>
              <Wheel
                mustStartSpinning={mustSpin}
                priceNumber={priceNumber}
                data={data}
                spinDuration={5}
                onStopSpinning={() => {
                  setMustSpin(false);
                }}
              />
              <button onClick={handleSpinClick} disabled={user?.credits < price}>SPIN</button>
            </>
          )
        }
      </div>
    </>
  )
}