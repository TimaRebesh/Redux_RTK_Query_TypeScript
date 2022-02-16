import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import commentsApi, { useCreateNewMutation, useGetCommentsQuery, useRemoveMutation } from "../services/commentsApi";

export default function Comments() {

    const [page, setPage] = useState(1);
    const { data } = useGetCommentsQuery(page);
    const [createNew] = useCreateNewMutation();
    const [removeComment] = useRemoveMutation();
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state);

    const [inputVal, setInputVal] = useState('');

    const createNewComment = async () => {
        if (inputVal) {
            setInputVal('');
            await createNew(inputVal)
        }
    }

    const removeFirst = async () => {
        // const result = dispatch(commentsApi.endpoints.getComments.initiate(1));         // with subscription
        // result.unwrap()
        //     .then(data => {
        //         removeComment(data[0].id);
        //     })
        //     .catch(e => console.log(e));
        // result.unsubscribe();
        const result = commentsApi.endpoints.getComments.select(1)(state as any)  // without subscription
        const { data, status, error } = result;
        data && removeComment(data[0].id);
    }

    return (
        <div className='block'>
            {data &&
                <div>
                    <input value={inputVal} onChange={e => setInputVal(e.target.value)}></input>
                    <button onClick={createNewComment}>Add new Comment</button>
                    {data.map(comment => <div key={comment.id}>ID:{comment.id}  {comment.text}</div>)}
                    <br />
                    {[1, 2, 3, 4, 5].map(btn => <button key={btn} onClick={() => setPage(btn)}>{btn}</button>)}
                    <br />
                    <button onClick={removeFirst}>Remove the very first comment</button>
                </div>
            }
        </div>
    )
}