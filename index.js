const container = document.querySelector(".container");
const div = [];
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
        return returnColor;
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




createDivs(16)

div.forEach((pixel) =>
{
    pixel.divElement.addEventListener("mouseover", () => 
    {
        pixel.changeDivsColor()
    })
})