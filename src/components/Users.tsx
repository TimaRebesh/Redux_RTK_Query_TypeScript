import { useState } from 'react';
import { useGetUsersQuery } from '../services/usersApi';
import Preloader from "./Preloader";

export default function Users() {

    const { data:users = [], isLoading, isSuccess, isError, error } = useGetUsersQuery('')

    const [edit, setEdit] = useState(0);

    return (
        <div className='block'>
            {isLoading && <Preloader/>}
            {isError && <h2>{error}</h2>}
            {users.length > 0 &&
                users.map(user => (
                    <div className='user' key={user.id}>
                        <Field label='name' value={user.name} />
                        <Field label='email' value={user.email} />
                        <div className='edit_remove'>
                            <span className='edit' onClick={() => setEdit(user.id)}>&#9998;</span>
                            <span className='remove' onClick={() => { }}>&#10005;</span>
                        </div>
                    </div>
                ))}
        </div>
    )
}

type FieldProps = {
    label: string;
    value: string;
}

function Field({ label, value }: FieldProps) {
    return (
        <div className='field'>
            { }
            <span className='label'>{label}:  </span>
            <span>{value}</span>
        </div>
    )
}
