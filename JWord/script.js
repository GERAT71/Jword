var tt;

function Bold ()
{   
    const FontWeight = document.getElementById("input-box")

    if (FontWeight.style.fontWeight != 'bold')
    {
        FontWeight.style.fontWeight = 'bold'
    }
    else
    {
        FontWeight.style.fontWeight = 'normal'
    }

}

function Italic ()
{
    const FontStyle = document.getElementById("input-box")

    if (FontStyle.style.fontStyle != 'italic')
    {
        FontStyle.style.fontStyle = 'italic'
    }
    else
    {
        FontStyle.style.fontStyle = 'normal'
    }

}

function Marked ()
{
    const FontStyle = document.getElementById("input-box")

    if (FontStyle.style.textDecoration != 'underline')
    {
        FontStyle.style.textDecoration = 'underline'
    }
    else
    {
        FontStyle.style.textDecoration = 'none'
    }
}

function SetFont ()
{
    const FontInput = document.getElementById("Font").value

    if (FontInput == "Arial")
    {
        const fontfamily = document.getElementById("input-box")

        fontfamily.style.fontFamily = 'Arial, Helvetica, sans-serif'
    }
    if (FontInput == "Calibri")
    {
        const fontfamily = document.getElementById("input-box")

        fontfamily.style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'
    }
    if (FontInput == "Lucida Console")
    {
        const fontfamily = document.getElementById("input-box")

        fontfamily.style.fontFamily = 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif'
    }
    if (FontInput == "Sans serif")
    {
        const fontfamily = document.getElementById("input-box")
    
        fontfamily.style.fontFamily = 'sans-serif'
    }
    if (FontInput == "Gill Sans")
    {
        const fontfamily = document.getElementById("input-box")
        
        fontfamily.style.fontFamily = 'Gill Sans'
    }
}

function SetPx ()
{
    const InputPx = document.getElementById("Px").value

    if (InputPx == "12")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "12px"
    }
    if (InputPx == "14")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "14px"
    }
    if (InputPx == "16")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "16px"
    }
    if (InputPx == "18")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "18px"
    }
    if (InputPx == "20")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "20px"
    }
    if (InputPx == "24")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "24px"
    }
    if (InputPx == "28")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "28px"
    }
    if (InputPx == "36")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "36px"
    }
    if (InputPx == "48")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "48px"
    }
    if (InputPx == "72")
    {
        const textpx = document.getElementById("input-box")

        textpx.style.fontSize = "72px"
    }
}

function SetFontColor ()
{
    let fontcolor = document.getElementById("input-box")
    let inputcolor = document.getElementById("FontColor").value

    fontcolor.style.color = inputcolor
}

function SetAlign ()
{
    const inputalign = document.getElementById("Align").value
    const textalign = document.getElementById("input-box")

    if (inputalign == "Left")
    {
        textalign.style.textAlign = "left"
    }
    if (inputalign == "Right")
    {
        textalign.style.textAlign = "right"
    }
    if (inputalign == "Center")
    {
        textalign.style.textAlign= "center"
    }
}

function Theme ()
{
    const bodytheme = document.getElementsByTagName('body')[0]

    const navbartheme = document.getElementById("Navbar")

    const inputboxtheme = document.getElementById("input-box")

    const labeltheme = document.getElementById("openbtnstyle")

    const filebtntheme = document.getElementById("NavTopBtn")

    const filename = document.getElementById("inputname")
    const filetype = document.getElementById("filetype")

    const boldtheme = document.getElementById("Bold")
    const italictheme = document.getElementById("Italic")
    const markedtheme = document.getElementById("Marked")

    const selecttheme = document.getElementById("Font")
    const pxtheme = document.getElementById("Px")
    const aligntheme = document.getElementById("Align")
    const incolortheme = document.getElementById("FontColor")
    const themetheme = document.getElementById("Theme")
    const themeset = document.getElementById("Theme").value

    if (themeset == "ModernDark")
    {
        //bg color

        bodytheme.style.backgroundColor = "black"

        navbartheme.style.backgroundColor = "#151515"

        inputboxtheme.style.backgroundColor = "#1f1e1e"
        
        labeltheme.style.backgroundColor = "#212121"

        filebtntheme.style.backgroundColor = "#212121"

        filename.style.backgroundColor = "#212121"
        filetype.style.backgroundColor = "#212121"

        boldtheme.style.backgroundColor = "#212121"
        italictheme.style.backgroundColor = "#212121"
        markedtheme.style.backgroundColor = "#212121"

        selecttheme.style.backgroundColor = "#212121"
        pxtheme.style.backgroundColor = "#212121"
        aligntheme.style.backgroundColor = "#212121"

        incolortheme.style.backgroundColor = "#212121"
        
        themetheme.style.backgroundColor = "#212121"

        //Color
        labeltheme.style.color = "white"

        filebtntheme.style.color = "white"

        filename.style.color = "white"
        filetype.style.color = "white"

        boldtheme.style.color = "white"
        italictheme.style.color = "white"
        markedtheme.style.color = "white"

        selecttheme.style.color = "white"
        pxtheme.style.color = "white"
        aligntheme.style.color = "white"

        incolortheme.style.color = "white"
        
        themetheme.style.color = "white"

        //box-shadow

        navbartheme.style.boxShadow = "none"

        inputboxtheme.style.boxShadow = "none"
    }
    if (themeset == "ModernWhite")
    {
        //bg color

        bodytheme.style.backgroundColor = "#d6d6d6"

        navbartheme.style.backgroundColor = "#e3e3e3"

        inputboxtheme.style.backgroundColor = "white"

        labeltheme.style.backgroundColor = "#e6e6e6"

        filebtntheme.style.backgroundColor = "#e6e6e6"

        filename.style.backgroundColor = "#e6e6e6"
        filetype.style.backgroundColor = "#e6e6e6"

        boldtheme.style.backgroundColor = "#e6e6e6"
        italictheme.style.backgroundColor = "#e6e6e6"
        markedtheme.style.backgroundColor = "#e6e6e6"

        selecttheme.style.backgroundColor = "#e6e6e6"
        pxtheme.style.backgroundColor = "#e6e6e6"
        aligntheme.style.backgroundColor = "#e6e6e6"

        incolortheme.style.backgroundColor = "#e6e6e6"
        
        themetheme.style.backgroundColor = "#e6e6e6"

        //Color
        labeltheme.style.color = "black"

        filebtntheme.style.color = "black"

        filename.style.color = "black"
        filetype.style.color = "black"

        boldtheme.style.color = "black"
        italictheme.style.color = "black"
        markedtheme.style.color = "black"

        selecttheme.style.color = "black"
        pxtheme.style.color = "black"
        aligntheme.style.color = "black"

        incolortheme.style.color = "black"
        
        themetheme.style.color = "black"

        //box-shadow

        navbartheme.style.boxShadow = "none"

        inputboxtheme.style.boxShadow = "none"
    }
    if (themeset == "Classic")
    {
        //bg color
        
        bodytheme.style.backgroundColor = "#a9a9a9"

        navbartheme.style.backgroundColor = "#d0d0d0"

        inputboxtheme.style.backgroundColor = "white"

        labeltheme.style.backgroundColor = "#c9c9c9"

        filebtntheme.style.backgroundColor = "#c9c9c9"

        filename.style.backgroundColor = "#c9c9c9"
        filetype.style.backgroundColor = "#c9c9c9"

        boldtheme.style.backgroundColor = "#c9c9c9"
        italictheme.style.backgroundColor = "#c9c9c9"
        markedtheme.style.backgroundColor = "#c9c9c9"

        selecttheme.style.backgroundColor = "#c9c9c9"
        pxtheme.style.backgroundColor = "#c9c9c9"
        aligntheme.style.backgroundColor = "#c9c9c9"

        incolortheme.style.backgroundColor = "#c9c9c9"
        
        themetheme.style.backgroundColor = "#c9c9c9"

        //Color
        labeltheme.style.color = "black"

        filebtntheme.style.color = "black"

        filename.style.color = "black"
        filetype.style.color = "black"

        boldtheme.style.color = "black"
        italictheme.style.color = "black"
        markedtheme.style.color = "black"

        selecttheme.style.color = "black"
        pxtheme.style.color = "black"
        aligntheme.style.color = "black"

        incolortheme.style.color = "black"
        
        themetheme.style.color = "black"

        //box-shadow

        navbartheme.style.boxShadow = "2px 2px 2px 2px rgb(111, 111, 111)"

        inputboxtheme.style.boxShadow = "2px 2px 2px 2px rgb(111, 111, 111)"
    }
}

function savefile ()
{
    let filetype = document.getElementById("filetype").value
    var text = document.getElementById("input-box").textContent
    var filename = document.getElementById("inputname").value
    const blob = new Blob([text], {type: "text"})

    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = filename + filetype
    link.href = fileUrl
    link.click()
}

function openfile ()
{
    let inputbox = document.getElementById("input-box")

    let upload = document.getElementById("openbtn")

    upload.addEventListener('change', () => {

        let fr = new FileReader()

        fr.readAsText(upload.files[0])

        fr.onload = function()
        {
            inputbox.innerHTML = fr.result
        }
    })
}

function hover (t)
{
    const theme = document.getElementById("Theme").value

    if (theme == "Classic")
        {
            t.style.backgroundColor = "#a3a3a3"
        }
        if (theme == "ModernDark")
        {
            t.style.backgroundColor = "#1f1f1f"
        }
        if (theme == "ModernWhite")
        {
            t.style.backgroundColor = "#e0e0e0"
        }
}
function unhover (t)
{
    const theme = document.getElementById("Theme").value

    if (theme == "Classic")
        {
            t.style.backgroundColor = "#c9c9c9"
        }
        if (theme == "ModernDark")
        {
            t.style.backgroundColor = "#212121"
        }
        if (theme == "ModernWhite")
        {
            t.style.backgroundColor = "#e6e6e6"
        }
}