var total = 0;

function oddishOrEvenish(number)
{
    
    while(number!=0)
    {
        total = total +(number%10);
        number = parseInt(number/10);
    }

    console.log(total);

    if (total%2 == 0)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }
}

oddishOrEvenish(4433);