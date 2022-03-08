import { useState } from "react"
import AnswersList from './AnswersList'

function Main() {

  const [open, setOpen] = useState(false); //Ignore this state


  const blankForm = {
    color: "",
    spendTime: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: "",
    name: "",
    email: ""
  };

  const [formData, setFormData] = useState([]);
  const [userData, setUserData] = useState(blankForm);


  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value

    if (inputName === "color") 
      setUserData({ ...userData, color: inputValue});
    if (inputValue === "swimming")
      setUserData({...userData, spendTime: {...userData.spendTime, swimming: event.target.checked },
      });
    if (inputValue === "bathing")
      setUserData({...userData, spendTime: { ...userData.spendTime, bathing: event.target.checked },
      });
    if (inputValue === "chatting")
      setUserData({...userData, spendTime: { ...userData.spendTime, chatting: event.target.checked },
      });
    if (inputValue === "noTime")
      setUserData({...userData, spendTime: { ...userData.spendTime, noTime: event.target.checked },
      });
    if (inputName === "review")
    setUserData({...userData, review: inputValue})
    if (inputName === "name")
    setUserData({...userData, name: inputValue})
    if (inputName === "email")
    setUserData({...userData, email: inputValue})
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData([...formData, userData]);
    setUserData(blankForm);
    }
    
  

  return (
    <main className='main'>
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
          formData={formData} 
          setUserData={setUserData}
          setFormData={setFormData}
         />
      </section>
      <section className='main__form'>
        <form class='form' onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class='form__group radio'>
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id='color-one'
                  type='radio'
                  name='color'
                  value="1"
                  onChange={handleChange}
                  checked={userData.color === "1"}
                />
                <label for='color-one'>1</label>
              </li>
              <li>
                <input
                  id='color-two'
                  type='radio'
                  name='color'
                  value="2"
                  onChange={handleChange}
                  checked={userData.color === "2"}
                />
                <label for='color-two'>2</label>
              </li>
              <li>
                <input
                  id='color-three'
                  type='radio'
                  name='color'
                  value="3"
                  onChange={handleChange}
                  checked={userData.color === "3"}
                />
                <label for='color-three'>3</label>
              </li>
              <li>
                <input
                  id='color-four'
                  type='radio'
                  name='color'
                  value="4"
                  onChange={handleChange}
                  checked={userData.color === "4"}
                />
                <label for='color-four'>4</label>
              </li>
            </ul>
          </div>
          <div class='form__group'>
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='swimming'
                    onChange={handleChange}
                    checked={userData.spendTime.swimming}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='bathing'
                    onChange={handleChange}
                    checked={userData.spendTime.bathing}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='chatting'
                    onChange={handleChange}
                    checked={userData.spendTime.chatting}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name='spend-time'
                    type='checkbox'
                    value='noTime'
                    onChange={handleChange}
                    checked={userData.spendTime.noTime}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name='review'
              cols='30'
              rows='10'
              value={userData.review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type='text'
              name='name'
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type='email'
              name='email'
              value={userData.email}
              onChange={handleChange}
            />
          </label>
          <input class='form__submit' type='submit' value="Submit Survey!" />
        </form>
      </section>
    </main>
  )
  
  };
  

export default Main;


