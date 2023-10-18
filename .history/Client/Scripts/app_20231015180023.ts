//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");

       $("a.delete").on("click", function(event)
       {
            if(!confirm("Are you sure?"))mongo
            {
                event.preventDefault();
                location.href = "/product-list";
            }
       });
    }

    window.addEventListener("load", Start);

})();