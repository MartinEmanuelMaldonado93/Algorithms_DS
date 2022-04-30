    enum Colors {
        Blue = 'blue',
        Green = 'green',
    };
    const ColorsObj = {
        Blue: 'blue',
        Green: 'green',
    }as const;
    // console.log( ColorsObj.Blue ) 
    // console.log( Colors['Blue']) 
    // console.log(m);
    // type DesiredArgs = 'blue' | 'green';
    function showColor(color: ColorsObjType) {
        console.log(color);
    }

    type ColorsObjType = typeof ColorsObj[ keyof typeof ColorsObj ];
    let m:ColorsObjType = 'blue';
    showColor(m);
    showColor("green");