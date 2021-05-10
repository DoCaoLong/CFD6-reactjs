import {useHistory } from 'react-router-dom'
export default function useDelayLink(){
    let history = useHistory()

    function delayLink(e) {
      e.preventDefault();
      //currentTarget lấy thẻ cha chứa nó
      let href = e.currentTarget.getAttribute("href");
      setTimeout(() => {
        history.push(href);
        document.querySelector(".lazy-load").style.display = "none";
      }, 450);
      console.log(href);
    }

    return delayLink
}

