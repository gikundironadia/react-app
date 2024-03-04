import React ,{useState} from 'react';


function Contact (){
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const handleSubmitUser = (event) => {
        event.preventDefault(); }
        

    return(

      
        <div className="w-1/3 pt-6 ">
        <h1>User registration</h1>

        <form onSubmit={(event) => handleSubmitUser(event)}>
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            className="w-full p-2 border-2 border-green-800"
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full p-2 border-2 border-green-800"
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 border-2 border-green-800"
          />
          <br />
          <br />
          <button
            className="bg-green-600 hover:bg-green-700 rounded px-6 py-2 text-white"
            onClick={() => handleSubmitUser}
          >
            submit
          </button>
        </form>
      </div>

    );

}
export default Contact;