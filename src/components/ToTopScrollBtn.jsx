export default function ScrollToTopBtn({view}){

    // Scroll direkt till topp funktionalitet
    window.onscroll = function () {
        view && scrollFunction()
    };

    function scrollFunction() {
        // Get the button
        let mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button key='topScrollBtn' onClick={topFunction} id="myBtn" title="Go to top">Top</button>
    )
}
