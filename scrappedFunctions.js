//**************************************************************************
//**************        NODE MODE *****************************************
//**************************************************************************

if (mode == 'node_mode') {

    snap = calcul_snap(event, grid_snap);

    if (typeof (binder) == 'undefined') {
        if (addNode = editor.nearWall(snap, 30)) {
            var x2 = addNode.wall.end.x;
            var y2 = addNode.wall.end.y;
            var x1 = addNode.wall.start.x;
            var y1 = addNode.wall.start.y;
            angleWall = qSVG.angle(x1, y1, x2, y2);
            binder = qSVG.create('boxbind', 'path', {
                id: "circlebinder",
                d: "M-20,-10 L-13,0 L-20,10 Z M-13,0 L13,0 M13,0 L20,-10 L20,10 Z",
                stroke: "#5cba79",
                fill: "#5cba79",
                "stroke-width": "1.5px"
            });
            binder.attr({
                "transform": "translate(" + (addNode.x) + "," + (addNode.y) + ") rotate(" + (angleWall.deg + 90) + ",0,0)"
            });
            binder.data = addNode;
            binder.x1 = x1;
            binder.x2 = x2;
            binder.y1 = y1;
            binder.y2 = y2;
        }
    } else {
        if (addNode = editor.nearWall(snap, 30)) {
            if (addNode) {
                var x2 = addNode.wall.end.x;
                var y2 = addNode.wall.end.y;
                var x1 = addNode.wall.start.x;
                var y1 = addNode.wall.start.y;
                angleWall = qSVG.angle(x1, y1, x2, y2);
                binder.attr({
                    "transform": "translate(" + (addNode.x) + "," + (addNode.y) + ") rotate(" + (angleWall.deg + 90) + ",0,0)"
                });
                binder.data = addNode;
            }
            else {
                binder.remove();
                delete binder;
            }
        } else {
            binder.remove();
            delete binder;
        }
    }
} // END NODE MODE

// Line 1868 in func.js
if (typeObj === 'pocket') {
    pushToConstruc(construc, "M " + (-sizeObj / 2) + "," + (-(thickObj / 2) - 4) + " L " + (-sizeObj / 2) + "," +
        thickObj / 2 + " L " + sizeObj / 2 + "," + thickObj / 2 + " L " + sizeObj / 2 + "," + (-(thickObj / 2) - 4) + " Z", "#ccc",
        "none",
        'none');

    pushToConstruc(construc, "M " + (-sizeObj / 2) + "," + (-thickObj / 2) + " L " + (-sizeObj / 2) + "," + thickObj / 2 +
        " M " + (sizeObj / 2) + "," + (thickObj / 2) + " L " + (sizeObj / 2) + "," + (-thickObj / 2), "none", "#494646",
        '5 5');

    pushToConstruc(construc, "M " + (-sizeObj / 2) + "," + (-thickObj / 2) + " L " + (-sizeObj / 2) + "," +
        (-thickObj / 2 - 5) + " L " + (+sizeObj / 2) + "," + (-thickObj / 2 - 5) + " L " + (+sizeObj / 2) +
        "," + (-thickObj / 2) + " Z", "url(#hatch)", "#494646", '');
    construc.params.resize = true;
    construc.params.resizeLimit.width = { min: 60, max: 200 };
}

// Line 1997 in func.js
if (classObj === 'energy') {
    construc.params.bindBox = true;
    construc.params.move = true;
    construc.params.resize = false;
    construc.params.rotate = false;
    if (typeObj === 'gtl') {
        pushToConstruc(construc, "m -20,-20 l 40,0 l0,40 l-40,0 Z", "#fff", "#333", '');
        construc.push({
            'text': "GTL",
            'x': '0',
            'y': '5',
            'fill': "#333333",
            'stroke': "none",
            'fontSize': '0.9em',
            "strokeWidth": "0.4px"
        });
        construc.params.width = 40;
        construc.params.height = 40;
        construc.family = 'stick';
    }
    if (typeObj === 'switch') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#333", '');
        pushToConstruc(construc, qSVG.circlePath(-2, 4, 5), "none", "#333", '');
        pushToConstruc(construc, "m 0,0 5,-9", "none", "#333", '');
        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';

    }
    if (typeObj === 'doubleSwitch') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#333", '');
        pushToConstruc(construc, qSVG.circlePath(0, 0, 4), "none", "#333", '');
        pushToConstruc(construc, "m 2,-3 5,-8 3,2", "none", "#333", '');
        pushToConstruc(construc, "m -2,3 -5,8 -3,-2", "none", "#333", '');
        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'dimmer') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#333", '');
        pushToConstruc(construc, qSVG.circlePath(-2, 4, 5), "none", "#333", '');
        pushToConstruc(construc, "m 0,0 5,-9", "none", "#333", '');
        pushToConstruc(construc, "M -2,-6 L 10,-4 L-2,-2 Z", "none", "#333", '');

        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'plug') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "M 10,-6 a 10,10 0 0 1 -5,8 10,10 0 0 1 -10,0 10,10 0 0 1 -5,-8", "none", "#333", '');
        pushToConstruc(construc, "m 0,3 v 7", "none", "#333", '');
        pushToConstruc(construc, "m -10,4 h 20", "none", "#333", '');
        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'plug20') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "M 10,-6 a 10,10 0 0 1 -5,8 10,10 0 0 1 -10,0 10,10 0 0 1 -5,-8", "none", "#333", '');
        pushToConstruc(construc, "m 0,3 v 7", "none", "#333", '');
        pushToConstruc(construc, "m -10,4 h 20", "none", "#333", '');

        construc.push({
            'text': "20A",
            'x': '0',
            'y': '-5',
            'fill': "#333333",
            'stroke': "none",
            'fontSize': '0.65em',
            "strokeWidth": "0.4px"
        });
        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'plug32') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "M 10,-6 a 10,10 0 0 1 -5,8 10,10 0 0 1 -10,0 10,10 0 0 1 -5,-8", "none", "#333", '');
        pushToConstruc(construc, "m 0,3 v 7", "none", "#333", '');
        pushToConstruc(construc, "m -10,4 h 20", "none", "#333", '');

        construc.push({
            'text': "32A",
            'x': '0',
            'y': '-5',
            'fill': "#333333",
            'stroke': "none",
            'fontSize': '0.65em',
            "strokeWidth": "0.4px"
        });
        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'roofLight') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "M -8,-8 L 8,8 M -8,8 L 8,-8", "none", "#333", '');

        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'free';
    }
    if (typeObj === 'wallLight') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "M -8,-8 L 8,8 M -8,8 L 8,-8", "none", "#333", '');
        pushToConstruc(construc, "M -10,10 L 10,10", "none", "#333", '');

        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'www') {
        pushToConstruc(construc, "m -20,-20 l 40,0 l0,40 l-40,0 Z", "#fff", "#333", '');

        construc.push({
            'text': "@",
            'x': '0',
            'y': '4',
            'fill': "#333333",
            'stroke': "none",
            'fontSize': '1.2em',
            "strokeWidth": "0.4px"
        });
        construc.params.width = 40;
        construc.params.height = 40;
        construc.family = 'free';
    }
    if (typeObj === 'rj45') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "m-10,5 l0,-10 m20,0 l0,10", "none", "#333", '');
        pushToConstruc(construc, "m 0,5 v 7", "none", "#333", '');
        pushToConstruc(construc, "m -10,5 h 20", "none", "#333", '');

        construc.push({
            'text': "RJ45",
            'x': '0',
            'y': '-5',
            'fill': "#333333",
            'stroke': "none",
            'fontSize': '0.5em',
            "strokeWidth": "0.4px"
        });
        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'tv') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "m-10,5 l0-10 m20,0 l0,10", "none", "#333", '');
        pushToConstruc(construc, "m-7,-5 l0,7 l14,0 l0,-7", "none", "#333", '');
        pushToConstruc(construc, "m 0,5 v 7", "none", "#333", '');
        pushToConstruc(construc, "m -10,5 h 20", "none", "#333", '');

        construc.push({
            'text': "TV",
            'x': '0',
            'y': '-5',
            'fill': "#333333",
            'stroke': "none",
            'fontSize': '0.5em',
            "strokeWidth": "0.4px"
        });
        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }

    if (typeObj === 'heater') {
        pushToConstruc(construc, qSVG.circlePath(0, 0, 16), "#fff", "#000", '');
        pushToConstruc(construc, "m-15,-4 l30,0", "none", "#333", '');
        pushToConstruc(construc, "m-14,-8 l28,0", "none", "#333", '');
        pushToConstruc(construc, "m-11,-12 l22,0", "none", "#333", '');
        pushToConstruc(construc, "m-16,0 l32,0", "none", "#333", '');
        pushToConstruc(construc, "m-15,4 l30,0", "none", "#333", '');
        pushToConstruc(construc, "m-14,8 l28,0", "none", "#333", '');
        pushToConstruc(construc, "m-11,12 l22,0", "none", "#333", '');

        construc.params.width = 36;
        construc.params.height = 36;
        construc.family = 'stick';
    }
    if (typeObj === 'radiator') {
        pushToConstruc(construc, "m -20,-10 l 40,0 l0,20 l-40,0 Z", "#fff", "#333", '');
        pushToConstruc(construc, "M -15,-10 L -15,10", "#fff", "#333", '');
        pushToConstruc(construc, "M -10,-10 L -10,10", "#fff", "#333", '');
        pushToConstruc(construc, "M -5,-10 L -5,10", "#fff", "#333", '');
        pushToConstruc(construc, "M -0,-10 L -0,10", "#fff", "#333", '');
        pushToConstruc(construc, "M 5,-10 L 5,10", "#fff", "#333", '');
        pushToConstruc(construc, "M 10,-10 L 10,10", "#fff", "#333", '');
        pushToConstruc(construc, "M 15,-10 L 15,10", "#fff", "#333", '');

        construc.params.width = 40;
        construc.params.height = 20;
        construc.family = 'stick';

    }
}

// Line 833 in func.js

document.getElementById("showRib").addEventListener("click", function () {
    if (document.getElementById("showRib").checked) {
        $('#boxScale').show(200);
        $('#boxRib').show(200);
        showRib = true;
    } else {
        $('#boxScale').hide(100);
        $('#boxRib').hide(100);
        showRib = false;
    }
});

document.getElementById("showArea").addEventListener("click", function () {
    if (document.getElementById("showArea").checked) {
        $('#boxArea').show(200);
    } else {
        $('#boxArea').hide(100);
    }
});

document.getElementById("showLayerRoom").addEventListener("click", function () {
    if (document.getElementById("showLayerRoom").checked) {
        $('#boxRoom').show(200);
    } else {
        $('#boxRoom').hide(100);
    }
});

document.getElementById("showLayerEnergy").addEventListener("click", function () {
    if (document.getElementById("showLayerEnergy").checked) {
        $('#boxEnergy').show(200);
    } else {
        $('#boxEnergy').hide(100);
    }
});

// Line 127 in index.html
<div id="reportTools" class="leftBox" style="width:500px;overflow-y: scroll;overflow-x: hidden">
    <h2><i class="fa fa-calculator" aria-hidden="true"></i> Report plan.</h2>
    <br /><br />
    <h2 class="toHide" id="reportTotalSurface" style="display:none"></h2>
    <h2 class="toHide" id="reportNumberSurface" style="display:none"></h2>
    <hr />
    <section id="reportRooms" class="toHide" style="display:none">
    </section>
    <button class="btn btn-info fully" style="margin-top:50px"
            onclick="$('#reportTools').hide('500', function(){$('#panel').show(300);});mode = 'select_mode';"><i
        class="fa fa-2x fa-backward" aria-hidden="true"></i></button>
</div>
// Line 353 in func.js
document.getElementById('report_mode').addEventListener("click", function () {
    if (typeof (globalArea) === "undefined") return false;
    mode = "report_mode";
    $('#panel').hide();
    $('#reportTools').show(200)
    document.getElementById('reportTotalSurface').innerHTML = "Total surface : <b>" + (globalArea / 3600).toFixed(1) + "</b> m²";
    $('#reportTotalSurface').show(1000);
    document.getElementById('reportNumberSurface').innerHTML = "Number of rooms : <b>" + ROOM.length + "</b>";
    $('#reportNumberSurface').show(1000);
    let number = 1;
    let reportRoom = '<div class="row">\n';
    for (let k in ROOM) {
        let nameRoom = "Room n°" + number + " <small>(sans nom)</small>";
        if (ROOM[k].name != "") nameRoom = ROOM[k].name;
        reportRoom += '<div class="col-md-6"><p>' + nameRoom + '</p></div>\n';
        reportRoom += '<div class="col-md-6"><p>Surface : <b>' + ((ROOM[k].area) / 3600).toFixed(2) + '</b> m²</p></div>\n';
        number++;
    }
    reportRoom += '</div><hr/>\n';
    reportRoom += '<div>\n';
    let switchNumber = 0;
    let plugNumber = 0;
    let lampNumber = 0;
    for (let k in OBJDATA) {
        if (OBJDATA[k].class === 'energy') {
            if (OBJDATA[k].type === 'switch' || OBJDATA[k].type === 'doubleSwitch' || OBJDATA[k].type === 'dimmer') switchNumber++;
            if (OBJDATA[k].type === 'plug' || OBJDATA[k].type === 'plug20' || OBJDATA[k].type === 'plug32') plugNumber++;
            if (OBJDATA[k].type === 'wallLight' || OBJDATA[k].type === 'roofLight') lampNumber++;
        }
    }
    reportRoom += '<p>Switch number : ' + switchNumber + '</p>';
    reportRoom += '<p>Electric outlet number : ' + plugNumber + '</p>';
    reportRoom += '<p>Light point number : ' + lampNumber + '</p>';
    reportRoom += '</div>';
    reportRoom += '<div>\n';
    reportRoom += '<h2>Energy distribution per room</h2>\n';
    number = 1;
    reportRoom += '<div class="row">\n';
    reportRoom += '<div class="col-md-4"><p>Label</p></div>\n';
    reportRoom += '<div class="col-md-2"><small>Swi.</small></div>\n';
    reportRoom += '<div class="col-md-2"><small>Elec. out.</small></div>\n';
    reportRoom += '<div class="col-md-2"><small>Light.</small></div>\n';
    reportRoom += '<div class="col-md-2"><small>Watts Max</small></div>\n';
    reportRoom += '</div>';

    let roomEnergy = [];
    for (let k in ROOM) {
        reportRoom += '<div class="row">\n';
        let nameRoom = "Room n°" + number + " <small>(no name)</small>";
        if (ROOM[k].name != "") nameRoom = ROOM[k].name;
        reportRoom += '<div class="col-md-4"><p>' + nameRoom + '</p></div>\n';
        switchNumber = 0;
        plugNumber = 0;
        let plug20 = 0;
        let plug32 = 0;
        lampNumber = 0;
        let wattMax = 0;
        let plug = false;
        for (let i in OBJDATA) {
            if (OBJDATA[i].class === 'energy') {
                if (OBJDATA[i].type === 'switch' || OBJDATA[i].type === 'doubleSwitch' || OBJDATA[i].type === 'dimmer') {
                    if (roomTarget = editor.rayCastingRoom(OBJDATA[i])) {
                        if (isObjectsEquals(ROOM[k], roomTarget)) switchNumber++;
                    }
                }
                if (OBJDATA[i].type === 'plug' || OBJDATA[i].type === 'plug20' || OBJDATA[i].type === 'plug32') {
                    if (roomTarget = editor.rayCastingRoom(OBJDATA[i])) {
                        if (isObjectsEquals(ROOM[k], roomTarget)) {
                            plugNumber++;
                            if (OBJDATA[i].type === 'plug' && !plug) {
                                wattMax += 3520;
                                plug = true;
                            }
                            if (OBJDATA[i].type === 'plug20') {
                                wattMax += 4400;
                                plug20++;
                            }
                            if (OBJDATA[i].type === 'plug32') {
                                wattMax += 7040;
                                plug32++;
                            }
                        }
                    }
                }
                if (OBJDATA[i].type === 'wallLight' || OBJDATA[i].type === 'roofLight') {
                    if (roomTarget = editor.rayCastingRoom(OBJDATA[i])) {
                        if (isObjectsEquals(ROOM[k], roomTarget)) {
                            lampNumber++;
                            wattMax += 100;
                        }
                    }
                }
            }
        }
        roomEnergy.push({
            switch: switchNumber,
            plug: plugNumber,
            plug20: plug20,
            plug32: plug32,
            light: lampNumber
        });
        reportRoom += '<div class="col-md-2"><b>' + switchNumber + '</b></div>\n';
        reportRoom += '<div class="col-md-2"><b>' + plugNumber + '</b></div>\n';
        reportRoom += '<div class="col-md-2"><b>' + lampNumber + '</b></div>\n';
        reportRoom += '<div class="col-md-2"><b>' + wattMax + '</b></div>\n';
        number++;
        reportRoom += '</div>';
    }
    reportRoom += '<hr/><h2>Standard details NF C 15-100</h2>\n';
    number = 1;

    for (let k in ROOM) {
        reportRoom += '<div class="row">\n';
        let nfc = true;
        let nameRoom = "Room n°" + number + " <small>(no name)</small>";
        if (ROOM[k].name != "") nameRoom = ROOM[k].name;
        reportRoom += '<div class="col-md-4"><p>' + nameRoom + '</p></div>\n';
        if (ROOM[k].name === "") {
            reportRoom +=
                '<div class="col-md-8"><p><i class="fa fa-ban" aria-hidden="true" style="color:red"></i> The room has no label, Home Rough Editor cannot provide you with information.</p></div>\n';
        } else {
            if (ROOM[k].name === "Salon") {
                for (let g in ROOM) {
                    if (ROOM[g].name === "Salle à manger") {
                        roomEnergy[k].light += roomEnergy[g].light;
                        roomEnergy[k].plug += roomEnergy[g].plug;
                        roomEnergy[k].switch += roomEnergy[g].switch;
                    }
                }
                reportRoom += '<div class="col-md-8">';
                if (roomEnergy[k].light === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 controlled light point</b> <small>(actually ' +
                        roomEnergy[k].light + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].plug < 5) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>5 power outlets</b> <small>(actually ' +
                        roomEnergy[k].plug + ')</small>.</p>\n';
                    nfc = false;
                }
                if (nfc) reportRoom += '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
                reportRoom += '</div>';
            }
            if (ROOM[k].name === "Salle à manger") {
                reportRoom +=
                    '<div class="col-md-8"><p><i class="fa fa-info" aria-hidden="true" style="color:blue"></i> This room is linked to the <b>living room / living room</b> according to the standard.</p></div>\n';
            }
            if (ROOM[k].name.substr(0, 7) === "Chambre") {
                reportRoom += '<div class="col-md-8">';
                if (roomEnergy[k].light === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 controlled light point</b> <small>(actually ' +
                        roomEnergy[k].light + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].plug < 3) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>3 power outlets</b> <small>(actually ' +
                        roomEnergy[k].plug + ')</small>.</p>\n';
                    nfc = false;
                }
                if (nfc) reportRoom += '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
                reportRoom += '</div>';
            }
            if (ROOM[k].name === "SdB") {
                reportRoom += '<div class="col-md-8">';
                if (roomEnergy[k].light === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 light point</b> <small>(actually ' +
                        roomEnergy[k].light + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].plug < 2) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>2 power outlets</b> <small>(actually ' +
                        roomEnergy[k].plug + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].switch === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 switch</b> <small>(actually ' +
                        roomEnergy[k].switch + ')</small>.</p>\n';
                    nfc = false;
                }
                if (nfc) reportRoom += '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
                reportRoom += '</div>';
            }
            if (ROOM[k].name === "Couloir") {
                reportRoom += '<div class="col-md-8">';
                if (roomEnergy[k].light === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 controlled light point</b> <small>(actually ' +
                        roomEnergy[k].light + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].plug < 1) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 power outlet</b> <small>(actually ' +
                        roomEnergy[k].plug + ')</small>.</p>\n';
                    nfc = false;
                }
                if (nfc) reportRoom += '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
                reportRoom += '</div>';
            }
            if (ROOM[k].name === "Toilette") {
                reportRoom += '<div class="col-md-8">';
                if (roomEnergy[k].light === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 light point</b>. <small>(actually ' +
                        roomEnergy[k].light + ')</small>.</p>\n';
                    nfc = false;
                }
                if (nfc) reportRoom += '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
                reportRoom += '</div>';
            }
            if (ROOM[k].name === "Cuisine") {
                reportRoom += '<div class="col-md-8">';
                if (roomEnergy[k].light === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 controlled light point</b> <small>(actually ' +
                        roomEnergy[k].light + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].plug < 6) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>6 power outlets</b> <small>(actually ' +
                        roomEnergy[k].plug + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].plug32 === 0) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>1 32A power outlet</b> <small>(actually ' +
                        roomEnergy[k].plug32 + ')</small>.</p>\n';
                    nfc = false;
                }
                if (roomEnergy[k].plug20 < 2) {
                    reportRoom +=
                        '<p><i class="fa fa-exclamation-triangle" style="color:orange" aria-hidden="true"></i> This room must have at least <b>2 20A power outlets</b> <small>(actually ' +
                        roomEnergy[k].plug20 + ')</small>.</p>\n';
                    nfc = false;
                }
                if (nfc) reportRoom += '<i class="fa fa-check" aria-hidden="true" style="color:green"></i>';
                reportRoom += '</div>';
            }
        }
        number++;
        reportRoom += '</div>';
    }

    document.getElementById('reportRooms').innerHTML = reportRoom;
    $('#reportRooms').show(1000);



});
