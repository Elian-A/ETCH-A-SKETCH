const container = document.querySelector(".container");
const refresh = document.querySelector("#refresh--button");
let div = [];
const Colors = ["red", "blue", "yellow", "violet", "pink",
            "skyblue", "brown", "blueviolet", "crimson", "lime"];
class Pixel
{
    constructor(divElement)
    {
        this.divElement = divElement;
        this.colorCount = 0;
        this.colors = [...Colors]
    }

    changeDivsColor()
    {
        this.divElement.style.backgroundColor = this.randomColor();
    }

    randomColor ()
    {
        let random = Math.floor(Math.random() * this.colors.length + 1);
        let returnColor = this.colors[random];
        this.colors.splice(random, 1);

        if (this.colorCount === 10)
        {
            return "black";
        }
        else
        {
            this.colorCount++;
            return returnColor;
        }
    }
};


function createDivs(divs)
{
    for(let i = 0; i < divs; i++)
    {
        let auxDiv = document.createElement("div");
        auxDiv.className = `item${i + 1}`;
        container.appendChild(auxDiv);
        let pixel = new Pixel(auxDiv);
        div[i] = pixel;
    }
}


refresh.addEventListener("click", () => {
    let pixeles = parseInt(prompt("elige el tamaño de tu cuadricula (menor 100)"));
    while(pixeles >= 100 || pixeles < 0)
    {
        pixeles =  parseInt(prompt("elige el tamaño de tu cuadricula (menor 100)"));
    }

    div.forEach((pixel) =>
    {
        pixel.divElement.remove()
    })
    div = [];

    createDivs(pixeles * pixeles);
    changeGridValues(pixeles);
    addEvent();
})

function addEvent()
{
    div.forEach((pixel) =>
    {
        pixel.divElement.addEventListener("mouseover", () => 
        {
            pixel.changeDivsColor()
        })
    })
}

function changeGridValues(grid = 16)
{
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

}

createDivs(16 * 16)
addEvent()