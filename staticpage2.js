
function StaticPage2(){

     return (
        <div>

            <img src = "images/c++logo.jpg"
            height = "200px" width = "200px" />

            <h1><u> INTERESTING INFORMATION ABOUT C++</u> </h1>
            <ol>
                <li><h2>C++ got the OOP features from Simula67 Programming language.</h2> </li>
                <li><h2>Many programming languages are influenced by c++, some of which include C#, Java, and even newer versions of C.</h2> </li>
                <li><h2>C and C++ have invented in the same place i.e. at AT&T (American Telephone & Telegraph) bell laboratories, located in the U.S.A.</h2> </li>
                <li><h2>Bjarne Stroustrup (Bell Labs) in 1979, introduced the C-With-Classes, and in 1983 with the C++.</h2> </li>
                <li><h2>C++ is a general-purpose, object-oriented programming language. </h2></li>

            </ol>
            <img src = "images/c++logo.jpg"
            height = "200px" width = "250px" />


        </div>
    )
}


ReactDOM.render(<StaticPage2 /> , document.getElementById("root"))
