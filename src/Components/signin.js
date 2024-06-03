import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignIn = () => {
        setLoading(true); 
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                setLoading(false); 
                setError(error.message);
            });
    };

    const handleSignUp = () => {
        setLoading(true); 
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    };

    return (
        <div className='sign-in'>
            <div className="title-content">
                <div className="logo-container">
                    <h1>Hike <img src="img/tree_logo.png" alt="An Evergreen tree with a tan background" className="logo"/> Helper</h1>
                </div>
            </div>
            <div className='login-content'>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn btn-primary' onClick={handleSignIn} disabled={loading}>Sign In</button>
                <button className='btn btn-secondary' onClick={handleSignUp} disabled={loading}>Sign Up</button> 
                {loading && <p>Loading...</p>} 
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default SignInScreen;