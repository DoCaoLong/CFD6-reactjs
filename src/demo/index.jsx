import { useDispatch, useSelector } from "react-redux";

export default function Demo(){

    let state = useSelector(state => state)
    // console.log(state);

    // tác động lên store thì dùng dispatch
    const dispatch = useDispatch()

    function handleIncrement(){
      // gọi action trong store
        dispatch({
            type : 'INCREMENT'
        })
    }
    function handleDecrement(){
        dispatch({
          type: "DECREMENT",
        });
    }

    return (
      <main className="notfound" id="main">
        <div className="container">
          <section>
            <h2 className="main-title"> {state.count} CountDown</h2>

            <button className="btn main round" onClick={handleIncrement}>
              +
            </button>
            <button className="btn main round" onClick={handleDecrement}>
              -
            </button>
          </section>
        </div>
      </main>
    );
}