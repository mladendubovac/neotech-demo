import React, { useState, useEffect, useMemo } from 'react';
import './Main.css';
import { API_ROUTES } from '../../constants/api_routes';
import { IUserInterface } from '../../interfaces/IUserInterface';

const Main = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<IUserInterface[]>([]);
    const [isRequesting, setIsRequesting] = useState<Boolean>(false);

    const getUsers = async () => {
        const response = await fetch(API_ROUTES.random_users);
        const { results } = await response.json();
        if (results) {
            setUsers([...results]);
        }
        // TODO check if counter === 10 || counter % 10 === 0
        // setCounter(0);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            isRequesting && setCounter(counter + 1);
        }, 1000);

        // TODO check if counter === 10 || counter % 10 === 0
        if (isRequesting && counter % 10 === 0) {
            getUsers();
        }
        return () => {
            clearInterval(interval);
        };

    }, [isRequesting, counter]);

    const averageAge = useMemo((): number => {
        const agesSum = users.reduce((accumulator, currentUser) => {
            accumulator += currentUser.dob.age;
            return accumulator;
        }, 0);
        return (agesSum / users.length)
    }, [users]);

    const handleButtonClick = () => {
        if (!users.length) {
            getUsers();
        }
        setIsRequesting(!isRequesting);
    }

    return (
        <div className="main">
            <div className="main-container">
                <div className="main-users-wrapper">
                    { users?.length > 0 ?
                            <ul className="main-users-list">
                                {users.map((user, index) => (
                                    <li key={index}>
                                        {user.name.first} {user.name.last} - {user.dob.age}
                                    </li>
                                ))}
                            </ul>
                            :
                            <h2 className="main-users-text">No users found!</h2>
                    }
                </div>
                { users?.length > 0 &&
                    <h2 className="main-age-text">Average users age: {averageAge}</h2>
                }
                <span className="main-counter">Counter: {counter}</span>
                <button className="main-button" onClick={handleButtonClick}>
                    {isRequesting ? 'Stop' : 'Start' } requesting
                </button>
            </div>
        </div>
    );
}

export default Main;
