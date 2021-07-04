export const getWindDirection = (deg) => {
    const start = 11.25
    const step = 22.5;
    if (deg > (360 - start) && deg <= start) return 'N'
    else if (deg > start && deg <= start+step) return 'NNE'
    else if (deg > start+step && deg <= start+step*2) return 'NE'
    else if (deg > start+step*2 && deg <= start+step*3) return 'ENE'
    else if (deg > start+step*3 && deg <= start+step*4) return 'E'
    else if (deg > start+step*4 && deg <= start+step*5) return 'ESE'
    else if (deg > start+step*5 && deg <= start+step*6) return 'SE'
    else if (deg > start+step*6 && deg <= start+step*7) return 'SSE'
    else if (deg > start+step*7 && deg <= start+step*8) return 'S'
    else if (deg > start+step*8 && deg <= start+step*9) return 'SSW'
    else if (deg > start+step*9 && deg <= start+step*10) return 'SW'
    else if (deg > start+step*10 && deg <= start+step*11) return 'WSW'
    else if (deg > start+step*11 && deg <= start+step*12) return 'W'
    else if (deg > start+step*12 && deg <= start+step*13) return 'WNW'
    else if (deg > start+step*13 && deg <= start+step*14) return 'NW'
    else if (deg > start+step*14 && deg <= start+step*15) return 'NNW'
}