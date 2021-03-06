import React, { useState } from 'react';

const UserSearch: React.FC = () => {
    const users: [
        { name: string; age: number },
        { name: string; age: number },
        { name: string; age: number }
    ] = [
        { name: 'Shubhang', age: 28 },
        { name: 'cat', age: 20 },
        { name: 'dog', age: 10 },
    ];

    // to define the type of hooks we use angle brackets
    //here we have state to manage some string so we set type as string
    const [name, setName] = useState<string>('');
    //here our use is an object so we set type as object using angle brackets
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    const searchName = () => {
        const foundUser: any = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return (
        <div>
            User Search
            <br />
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <button onClick={searchName}>Search</button>
            {user && user.name}
            {user && user.age}
        </div>
    );
};

export default UserSearch;
