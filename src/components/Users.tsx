import { useState } from 'react';
import { useGetUsersQuery, useCreateNewMutation } from '../services/usersApi';
import Preloader from "./Preloader";

export default function Users() {

    const { data: users = [], isLoading, isSuccess, isError, error } = useGetUsersQuery('');
    const [createNew, createNewStatus] = useCreateNewMutation();

    const [edit, setEdit] = useState(0);

    const createNewUser = async () => {
        await createNew({ name: 'new user', email: 'email' }).unwrap
    }

    return (
        <div className='block'>
            {(isLoading || createNewStatus.isLoading) && <Preloader />}
            {isError && error && <h2>{`Error`}</h2>}
            {users.length > 0 &&
                <>
                    <button className='create_button' onClick={createNewUser}>Create new user</button>
                    {users.map(user => (
                        <div className='user' key={user.id}>
                            <Field label='name' value={user.name} />
                            <Field label='email' value={user.email} />
                            <div className='edit_remove'>
                                <span className='edit' onClick={() => setEdit(user.id)}>&#9998;</span>
                                <span className='remove' onClick={() => { }}>&#10005;</span>
                            </div>
                        </div>
                    ))}
                </>
            }
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
