//---------- From 01core_me.js ----------
thisApp.menushtml = [];
thisApp.menuHistory = [];
thisApp.menus[0] = {
    name: "mainmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/editmenu.png'>" + trans.edit[language],
        buttononclick: "go_to_menu('editmenu')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/addtext.png'> Add Text",
        buttononclick: "prepare_text_modal('create')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/stickers.png'>" + trans.etools[language],
        buttononclick: "go_to_menu('stickers')"
    },{
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/filters.png'>" + trans.filters[language],
        buttononclick: "go_to_menu('effects')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/overlays.png'>" + trans.overlays[language],
        buttononclick: "overlay_picker()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/foregrounds.png'>" + trans.foregrounds[language],
        buttononclick: "foreground_picker()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/other.png'>" + trans.etools[language],
        buttononclick: "go_to_menu('toolsmenu')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/toolbar/layers.png'> Layers",
        buttononclick: "CanvasLayers('true')"
    }]
};
thisApp.menus.push({
    name: "editmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/crop.png'>" + trans.crop[language],
        buttononclick: "setTimeout(crop_image,300);go_to_menu('cropmenu');toggle_undo_redo_menu_div(0);"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/rotater.png'>" + trans.rotateclockwise[language],
        buttononclick: "rotate_clockwise()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/rotatel.png'>" + trans.rotateanticlockwise[language],
        buttononclick: "rotate_anticlockwise()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/flipx.png'>" + trans.flipx[language],
        buttononclick: "flip_X()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/flipy.png'>" + trans.flipy[language],
        buttononclick: "flip_Y()"
    }
]
});
thisApp.menus.push({
    name: "cropmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu();cancelCrop();"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/squarecrop.png'>" + trans.square[language],
        buttononclick: "set_square_crop()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/freecrop.png'>" + trans.free[language],
        buttononclick: "set_free_crop()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/common/check.png'>" + trans.ok[language],
        buttononclick: "go_back_to_last_menu();apply_crop();"
    }]
});
thisApp.menus.push({
    name: "rotatemenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu();"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/rotater.png'>" + trans.rotateclockwise[language],
        buttononclick: "rotate_clockwise()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/rotatel.png'>" + trans.rotateanticlockwise[language],
        buttononclick: "rotate_anticlockwise()"
    }]
});
thisApp.menus.push({
    name: "flipmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/flipx.png'>" + trans.flipx[language],
        buttononclick: "flip_X()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/editmenu/flipy.png'>" + trans.flipy[language],
        buttononclick: "flip_Y()"
    }]
});
thisApp.menus.push({
    name: "toolsmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/basic.png'>" + trans.basictools[language],
        buttononclick: "go_to_menu('basictools')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/mainmenu/blurmenu.png'>" + trans.blur[language],
        buttononclick: "go_to_menu('blurmenu')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/vib.png'>" + trans.vibrance[language],
        buttononclick: "filter_range_picker('Vibrance','vibrance')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/sharp.png'>" + trans.sharpen[language],
        buttononclick: "filter_range_picker('Sharpen','sharpen')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/half.png'>" + trans.colorhalftone[language],
        buttononclick: "filter_range_picker('Halftone','colorhalftone')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/sep.png'>" + trans.Sepia[language],
        buttononclick: "filter_range_picker('Sepia','sepia')"
    }]
});

function prepare_menus() {
    var a = thisApp.menus.length;
    for (var i = 0; i < a; i++) {
        var b = "";
        for (var t = 0; t < thisApp.menus[i].buttons.length; t++)
            if (b == undefined) b = '<a onclick="' + thisApp.menus[i].buttons[t].buttononclick + '" class="oddtoolbarbutton tab-link toolbarbuttons button button-fill " style="">' + thisApp.menus[i].buttons[t].buttonname + "</a>";
            else b += '<a onclick="' + thisApp.menus[i].buttons[t].buttononclick + '" class="oddtoolbarbutton tab-link toolbarbuttons button button-fill " style="">' + thisApp.menus[i].buttons[t].buttonname + "</a>";
        thisApp.menushtml[i] = {
            name: "" + thisApp.menus[i].name,
            html: '<div class="toolbar-inner" menuid="' + thisApp.menus[i].name + '">\n\t\t\t\t\t\t\t\t' + b + '\n\t\t\t\t\t\t\t\t<a style="display:none" class="tab-link toolbarbuttons active"></a>\n\t\t</div>'
        }
    }
}

function go_to_menu(a) {
    var b = thisApp.menushtml.filter(function(e) {
        return e.name == $(".toolbar-inner").attr("menuid")
    })[0].html;
    var c = thisApp.menushtml.filter(function(e) {
        return e.name == a
    })[0].html;
    if (b != c) {
        if (a != "mainmenu") thisApp.menuHistory.push(b);
        $(".tools .toolbar-inner").css("transform", "translate3d(0, 100%, 0)").css("opacity", 0);
        setTimeout(function() {
            $(".tools").html(c);
            setTimeout(function() {
                $(".tools .toolbar-inner").css("transform", "translate3d(0, 0, 0)").css("opacity", 1);
                if ($(".speed-dial-opened").length > 0) $$("#floatingbutton").trigger("click")
            }, 100)
        }, 200)
    }
}

function go_back_to_last_menu() {
    $(".tools .toolbar-inner").css("transform", "translate3d(0, 100%, 0)").css("opacity", 0);
    setTimeout(function() {
        if (thisApp.menuHistory.length != 0) {
            $(".tools").html(thisApp.menuHistory[thisApp.menuHistory.length - 1]);
            thisApp.menuHistory.pop();
            setTimeout(function() {
                $(".tools .toolbar-inner").css("transform", "translate3d(0, 0, 0)").css("opacity", 1);
                if ($(".speed-dial-opened").length > 0) $$("#floatingbutton").trigger("click")
            }, 100)
        }
    }, 200);
    toggle_undo_redo_menu_div(1)
};
//---------- 01core_me.js end ----------
//---------- From 02fil.js ----------
thisApp.current_picker = undefined;
thisApp.effects_pickershtml = [];
thisApp.menus.push({
    name: "effects",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/filters/f0.png'>" + trans.Classic[language],
        buttononclick: "filter_picker(1)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/filters/f1.png'>" + trans.Elegant[language],
        buttononclick: "filter_picker(2)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/filters/f2.png'>" + trans.Beauty[language],
        buttononclick: "filter_picker(3)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/filters/f3.png'>" + trans.Artistic[language],
        buttononclick: "filter_picker(4)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/filters/f4.png'>" + trans.BW[language],
        buttononclick: "filter_picker(0)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/filters/f0.png'>" + trans.Colorful[language],
        buttononclick: "filter_picker(5)"
    }]
});

function prepare_effects_pickers() {
    for (var i = 0; i < thisApp.effects_pickers.length; i++) {
        var a = "";
        for (var t = 0; t < thisApp.effects_pickers[i].effects_count; t++)
            if (a == "") a = '<li style="position:relative" onclick="set_simple_filter($(this))">\n\t\t\t\t\t\t\t\t\t\t<canvas></canvas>\n\t\t\t\t\t\t\t\t\t\t<div class="filterssettings">\n\t\t\t\t\t\t\t\t\t\t\t<img src="icons/mainmenu/other.png" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>';
            else a += '<li style="position:relative" onclick="set_simple_filter($(this))">\n\t\t\t\t\t\t\t\t\t\t<canvas></canvas>\n\t\t\t\t\t\t\t\t\t\t<div class="filterssettings">\n\t\t\t\t\t\t\t\t\t\t\t<img src="icons/mainmenu/other.png" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>';
        thisApp.effects_pickershtml[i] = ' <div style="z-index: 13001;opacity:0;max-height: unset !important;height: 137px !important;" class="picker-modal untouchablediv  theme-deeporange shadowpickermodal maintoolssubmenu">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="toolbar-inner">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill" onclick=""><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a id="backtosettings" style="height: 45px; padding-top: 0px;margin-top: 0px;display:none" class="pickerclosebutton button button-fill" onclick="show_ranges_options(false)"><img class="pickertoolbarbutton" src="icons/common/back.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="center touchablediv middle-buttons-container" style="position: relative;width: 120px;height: 100%;line-height: 1px !important;background: var(--toolbar-and-buttons-background-color);background-image: var(--toolbar-and-buttons-background-image);">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="middlerightbutton pickerclosebutton button button-fill" onclick="change_blending_mode(false,true)"><img class="pickertoolbarbutton" src="icons/common/forward.png" style="right: 0px;width: 20px;"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="middleleftbutton pickerclosebutton button button-fill" onclick="change_blending_mode(false,false)"><img class="pickertoolbarbutton" src="icons/common/backward.png" style="left: 0px;width: 20px;"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div onclick="layer_blending_mode($(this))" style="height: 100%;margin-top: 12px;width: 30%;background: none !important;top: -12px;" class="middlebuttonborder">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img style="top: -12px;" class="pickertoolbarbutton" src="icons/mainmenu/overlays.png"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div currentblendnumber="" id="blendingtitle" style="position: absolute;left: 0;right: 0;width: 100%;margin: auto;top: 24px;height: 15px;bottom: 0;pointer-events: none;text-align: center;line-height: 15px;"></div></div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill " onclick="apply_screen_to_texture()"><img class="pickertoolbarbutton" src="icons/common/check.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="content-block" style="height:100%;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ul class="emojul" style="padding-top: 12px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + a + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </ul>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class="list-block optionsranges" style="position: relative; direction:rtl;display:none;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul" style="height: 100px;overflow-y: auto;overflow-x:hidden">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li style="height: 42px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' + trans.opacity[language] + '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0" max="1" value="1" step="0.01" onchange="" onmouseup="update_screen();" ontouchend="update_screen();" oninput="APP.brushMaskOpacity=parseFloat($(this).val()); $($(this).closest(\'li\')).children(\'.shadowrangevalue\').html($(this).val());update_if_normal_blending()" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="shadowrangevalue">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li style="height: 42px;" disabled="disabled">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-title label rangestitle">' + trans.BlendAmount[language] + '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="item-input" style="margin-left: 1px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="range-slider" style="padding-left: 6px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input style="transform:rotate(180deg)" id="shadowblur" min="0" max="10" value="1" step="0.1" onchange="" onmouseup="update_screen();" ontouchend="update_screen();" oninput="APP.brushOverlayAmount=parseFloat($(this).val()); $($(this).closest(\'li\')).children(\'.shadowrangevalue\').html($(this).val());" type="range">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="shadowrangevalue">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>'
    }
}

function filter_picker(a) {
    var b = thisApp.effects_pickershtml[a];
    var c = myApp.pickerModal(b);
    $$(".picker-modal").on("close", function() {
        cancel_effects();
        showFullAdRatio(1)
    });
    thisApp.current_picker = a;
    show_loader();
    set_filter_region_brush();
    swap_brush_fg_bg();
    APP.isBrushing = true;
    update_screen();
    setTimeout(function() {
        prepare_filters_thumbs(function() {
            hide_loader();
            toggle_undo_redo_menu_div(0);
            $("#blendingtitle").html(converting_blending_modes_names(APP.brushOverlayMode));
            $("#blendingtitle").attr("currentblendnumber", APP.brushOverlayMode)
        })
    }, 100)
}

function set_simple_filter(a, b) {
    APP.thefilternumber = String(a.index());
    var c = $($(".filterssettings")[a.index()]);
    if (c.css("display") == "none") {
        APP.mode.name = "MixedEffects";
        if (APP.isBrushing) {
            update_filter_mode_while_brush();
            swap_brush_fg_bg()
        }
        update_screen()
    } else show_ranges_options(true);
    if (!b) {
        $(".filterssettings").hide();
        c.show()
    }
}

function prepare_filters_thumbs(a) {
    var b = $(".emojul canvas").length;
    for (var i = 0; i < b; i++) {
        set_simple_filter($($(".emojul li")[i]), true);
        cloneCanvas(APP.app._canvas, $(".emojul canvas")[i]);
        if (i == b - 1) set_simple_filter($($(".emojul li")[0]), true)
    }
    hide_loader();
    $(".picker-modal").css("opacity", "1");
    if (a) a()
}

function cloneCanvas(a, b) {
    var c = b;
    var d = c.getContext("2d");
    c.width = a.width / (a.height / 128);
    c.height = 128;
    d.drawImage(a, 0, 0, c.width, 128);
    return c
}

function cancel_effects() {
    APP.mode.name = "nofilter";
    set_defaults();
    APP.isFilterRegionOn = false;
    APP.brushOverlayAmount = 1;
    APP.brushOverlayMode = -1;
    APP.brushOverlayIsOverlayBackground = false;
    APP.brushMaskOpacity = 1;
    toggle_undo_redo_menu_div(1);
    update_screen()
}

function change_blending_mode(a, b) {
    if (b)
        if (APP.brushOverlayMode >= 27) APP.brushOverlayMode = -1;
        else if (APP.brushOverlayMode == -1) APP.brushOverlayMode = 1;
    else if (APP.brushOverlayMode == 3) APP.brushOverlayMode = 5;
    else APP.brushOverlayMode += 1;
    else if (APP.brushOverlayMode <= -1) APP.brushOverlayMode = 27;
    else if (APP.brushOverlayMode == 1) APP.brushOverlayMode = -1;
    else if (APP.brushOverlayMode == 5) APP.brushOverlayMode = 3;
    else APP.brushOverlayMode -= 1;
    if (a) APP.brushOverlayMode = a;
    if (APP.brushOverlayMode == -1) $($(".rangesul li")[$(".rangesul li").length - 1]).attr("disabled", "disabled");
    else $($(".rangesul li")[$(".rangesul li").length - 1]).removeAttr("disabled");
    update_screen();
    $("#blendingtitle").html(converting_blending_modes_names(APP.brushOverlayMode));
    $("#blendingtitle").attr("currentblendnumber", APP.brushOverlayMode)
}

function converting_blending_modes_names(a) {
    var b;
    if (a == -1) b = trans.Normal[language];
    if (a == 0) b = trans.bAdd[language];
    if (a == 1) b = trans.bSubtract[language];
    if (a == 2) b = trans.Multiply[language];
    if (a == 3) b = trans.bBlend[language];
    if (a == 4) b = trans.materialize[language];
    if (a == 5) b = trans.Darken[language];
    if (a == 6) b = trans.ColorBurn[language];
    if (a == 7) b = trans.linearBurn[language];
    if (a == 8) b = trans.darkerColor[language];
    if (a == 9) b = trans.Lighten[language];
    if (a == 10) b = trans.Screen[language];
    if (a == 11) b = trans.ColorDodge[language];
    if (a == 12) b = trans.linearDodge[language];
    if (a == 13) b = trans.lighterColor[language];
    if (a == 14) b = trans.Overlay[language];
    if (a == 15) b = trans.SoftLight[language];
    if (a == 16) b = trans.HardLight[language];
    if (a == 17) b = trans.vividLight[language];
    if (a == 18) b = trans.linearLight[language];
    if (a == 19) b = trans.pinLight[language];
    if (a == 20) b = trans.hardMix[language];
    if (a == 21) b = trans.Difference[language];
    if (a == 22) b = trans.Exclusion[language];
    if (a == 23) b = trans.divide[language];
    if (a == 24) b = trans.HueBlending[language];
    if (a == 25) b = trans.ColorBlending[language];
    if (a == 26) b = trans.SaturationBlending[language];
    if (a == 27) b = trans.Luminosity[language];
    return b
}

function show_ranges_options(a) {
    if (a) {
        $(".emojul").hide();
        $(".fgsize").hide();
        $(".optionsranges").show();
        $(".picker-modal .toolbar-inner a").hide();
        $(".picker-modal .toolbar-inner .center a").show();
        $(".picker-modal .toolbar-inner .center").css("right", "calc(-50% + 91px)");
        $("#backtosettings").show()
    } else {
        $(".emojul").css("display", "flex");
        $(".fgsize").css("display", "block");
        $(".optionsranges").hide();
        $(".picker-modal .toolbar-inner a").show();
        $(".picker-modal .toolbar-inner .center").css("right", "0px");
        $("#backtosettings").hide()
    }
}

function layer_blending_mode(a) {
    var b = 28;
    var c = "";
    for (var i = -1; i < b; i++)
        if (i != 0 && i != 4)
            if (i == -1) c = '<li onclick="change_blending_mode(' + i + ')">\n\t\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="' + i + '">\n\t\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="">' + converting_blending_modes_names(i) + "</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t</li>";
            else c += '<li onclick="change_blending_mode(' + i + ')">\n\t\t\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="' + i + '">\n\t\t\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="">' + converting_blending_modes_names(i) + "</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t\t</li>";
    var d = '<div class="popover" style="text-align: center;margin-left: -11px;margin-top: 8px;height: calc(50%);overflow-y: auto;width: 135px;">\n                      <div class="popover-inner">\n                        <div class="list-block">\n                          <ul>\n\t\t\t\t\t\t\t' + c + "\n                          </ul>\n                        </div>\n                      </div>\n                    </div>";
    var f = myApp.popover(d, $(".content-block"));
    $$(".label-radio input").each(function(e) {
        if ($(this).val() == APP.brushOverlayMode) $(this).attr("checked", "checked")
    });
    $(".modal-overlay").css("z-index", "13090");
    $$(".popover").on("close", function() {
        $(".modal-overlay").css("z-index", "13000")
    })
}

function update_if_normal_blending() {
    if (APP.brushOverlayMode === -1) update_screen()
};
//---------- 02fil.js end ----------
//---------- From 03pics.js ----------
thisApp.picker_images_toolshtml = [];
thisApp.picker_images_tools = [];

function prepare_picker_images_tools() {
    var c = 0;
    if (thisApp.stickerstartwith1) c = 1;
    var d = $.map(how_many_per_category, function(a, b) {
        return b
    });
    var e = [];
    for (var i = 0; i < d.length; i++) {
        thisApp.picker_images_tools.push({
            type: "images",
            name: d[i],
            imagescount: how_many_per_category[d[i]],
            picker_height: "102",
            tlink: "stkrs/" + d[i],
            extension: "png"
        });
        if (i == 0) {
            e.push({
                buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
                buttononclick: "go_back_to_last_menu();"
            });
            e.push({
                buttonname: "<img class='toolbarmenuicon' src='icons/index/fromgallery.png'>" + trans.FromGallery[language],
                buttononclick: "chooseFromGallery('stickers')"
            });
            e.push({
                buttonname: "<img class='toolbarmenuicon' src='stkrs/" + d[i] + "/" + c + ".png'>" + trans[d[i]]
                    [language],
                buttononclick: "filter_images_picker('" + d[i] + "')"
            })
        } else e.push({
            buttonname: "<img class='toolbarmenuicon' src='stkrs/" + d[i] + "/" + c + ".png'>" + trans[d[i]][
                language
            ],
            buttononclick: "filter_images_picker('" + d[i] + "')"
        })
    }
    thisApp.menus.push({
        name: "stickers",
        buttons: e
    });
    prepare_picker_images_tools_pickers()
}

function prepare_picker_images_tools_pickers() {
    var a = 0;
    if (thisApp.stickerstartwith1) a = 1;
    for (var i = 0; i < thisApp.picker_images_tools.length; i++) {
        var b = "";
        for (var t = a; t < thisApp.picker_images_tools[i].imagescount + a; t++) {
            var c = thisApp.picker_images_tools[i].tlink;
            var d = thisApp.picker_images_tools[i].extension;
            var e = '<li groupnumber="first" oldemojid="1" class="thenewlist">\n\t\t\t\t\t\t\t\t\t<img onclick="add_image_to_canvas($(this)[0])" osrc="' + c + "/o/" + t + "." + d + '" src="' + c + "/" + t + "." + d + '">\n\t\t\t\t\t\t\t\t</li>';
            if (b == "") b = e;
            else b += e
        }
        thisApp.picker_images_toolshtml[i] = {
            name: thisApp.picker_images_tools[i].name,
            html: '\n\t\t\t\t\t\t\t\t\t<div style="z-index: 13001;height: ' + thisApp.picker_images_tools[i].picker_height + 'px !important;" class="picker-modal untouchablediv sketchstylesranges theme-orange shadowpickermodal">\n\t\t\t\t\t\t\t\t\t  <div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t\t\t<div class="toolbar-inner close-picker">\n\t\t\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 3px;margin-top: 2px;" class="pickerclosebutton close-picker button button-fill" onclick=""><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t\t\t<div class="content-block" style="height:100%;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="list-block">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul imagespickerul" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t' + b + "\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>"
        }
    }
}

function add_image_to_canvas(a) {
    var b = new fabric.Image(a, {
        left: 0,
        top: 0,
        height: a.naturalHeight,
        width: a.naturalWidth
    });
    canvas.add(b);
    b.center();
    b.padding = b.cornerSize / 2 + 5;
    b.setCoords();
    canvas.renderAll()
}

function filter_images_picker(a, b) {
    var c = thisApp.picker_images_toolshtml.filter(function(e) {
        return e.name == a
    })[0].html;
    var d = myApp.pickerModal(c);
    $(".modal-overlay").addClass("modal-overlay-visible");
    $(".modal-overlay").attr("onclick", "myApp.closeModal('.picker-modal')");
    $$(".picker-modal").on("close", function() {
        showFullAdRatio(1.5);
        $(".modal-overlay").removeClass("modal-overlay-visible");
        $(".modal-overlay").removeAttr("onclick");
        toggle_undo_redo_menu_div(1)
    });
    toggle_undo_redo_menu_div(0)
}

function turn_image_to_dataurl(a) {}

function add_bgcolor_to_canvas(b) {
    check_if_anything_changed();   
        canvas.add(d);       
        canvas.renderAll();
        hide_loader();
        showFullAdRatio(1);
        check_if_anything_changed("after")
    
}

function add_image_to_canvas_from_url(b) {
    check_if_anything_changed();
    var c;
    var d;
    fabric.Image.fromURL(b, function(a) {
        a.set({
            theimportedimgtype: "oldemoji",
            borderColor: "transparent",
            cornerColor: "black",
            transparentCorners: true,
            hasBorders: true
        });
        d = a;
        d.setScaleX(1);
        d.setScaleY(1);
        d.minScaleLimit = .01;
        canvas.add(d);
        d.center();
        d.setCoords();
        d.padding = d.cornerSize / 2 + 5;
        canvas.renderAll();
        hide_loader();
        showFullAdRatio(1);
        check_if_anything_changed("after")
    })
}

function export_image() {
    var e = cordova.plugins.permissions;
    e.hasPermission(e.WRITE_EXTERNAL_STORAGE, checkPermissionCallback, null);

    function checkPermissionCallback(c) {
        if (!c.hasPermission) {
            var d = function() {};
            e.requestPermission(e.WRITE_EXTERNAL_STORAGE, function(a) {
                if (!a.hasPermission) thisappalert(trans.nopremsonosave[language]);
                else export_image()
            }, d)
        } else {
            show_loader();
            setTimeout(function() {
                var b = new fabric.Image($("#gl_canvas")[0], {
                    left: 0,
                    top: 0,
                    height: $("#gl_canvas")[0].height,
                    width: $("#gl_canvas")[0].width
                });
                canvas.backgroundImage = b;
                b.top = -.5;
                b.left = -.5;
                canvas.deactivateAll();
                canvas.discardActiveGroup();
                canvas.renderAll();
                window.canvas2ImagePlugin.saveImageDataToLibrary(function(a) {
                    saved_diag();
                    hide_loader();
                    canvas.backgroundImage = "";
                    canvas.renderAll();
                    showFullAd()
                }, function(a) {}, document.getElementById("maincanvas"), ".jpg", 100, thisApp.foldername + "/" + thisApp.name[language])
            }, 200)
        }
    }
}

function saved_diag() {
    myApp.modal({
        title: trans.savedsuccessfully[language],
        text: trans.pleaserateapp[language],
        buttons: [{
            text: trans.ok[language]
        }, {
            text: trans.RateApp[language],
            onClick: function() {
                rateApp()
            }
        }]
    });
    if (language == "arabic") $(".modal").css("direction", "rtl");
    else $(".modal").css("direction", "ltr")
}

function shareImage() {
    show_loader();
    var a = new fabric.Image($("#gl_canvas")[0], {
        left: 0,
        top: 0,
        height: $("#gl_canvas")[0].height,
        width: $("#gl_canvas")[0].width
    });
    canvas.backgroundImage = a;
    a.top = -.5;
    a.left = -.5;
    canvas.deactivateAll();
    canvas.discardActiveGroup();
    canvas.renderAll();
    shareddataurl = canvas.toDataURL({
        format: "jpeg"
    });
    window.plugins.socialsharing.share(null, thisApp.name[language], String(shareddataurl), null);
    setTimeout(function() {
        hide_loader();
        canvas.backgroundImage = "";
        canvas.renderAll()
    }, 700);
    setTimeout(function() {
        showFullAd()
    }, 2E3)
};
//---------- 03pics.js end ----------
//---------- From 04filtools.js ----------
thisApp.menus.push({
    name: "basictools",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/basic/brightnesscontrast.png'>" + trans.BrightCont[language],
        buttononclick: "filter_range_picker('BrightCont','basic')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/basic/huesaturation.png'>" + trans.SatHue[language],
        buttononclick: "filter_range_picker('SatHue','basic')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/basic/expogamma.png'>" + trans.ExpoGam[language],
        buttononclick: "filter_range_picker('ExpoGam','basic')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/basic/rgb.png'>" + trans.RGB[language],
        buttononclick: "filter_range_picker('RGB','basic')"
    }]
});
thisApp.menus.push({
    name: "blurmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/blur/normalblur.png'>" + trans.triangle_blur[language],
        buttononclick: "filter_range_picker('Normal Blur','triangle_blur')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/blur/hexagon.png'>" + trans.hexagonal_pixelate[language],
        buttononclick: "filter_range_picker('Pixelate','hexagonal_pixelate')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/blur/zoomblur.png'>" + trans.zoom_blur[language],
        buttononclick: "filter_range_picker('Zoom','zoom_blur')"
    }]
});
thisApp.menus.push({
    name: "othertools",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/vib.png'>" + trans.vibrance[language],
        buttononclick: "filter_range_picker('Vibrance','vibrance')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/sharp.png'>" + trans.sharpen[language],
        buttononclick: "filter_range_picker('Sharpen','sharpen')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/half.png'>" + trans.colorhalftone[language],
        buttononclick: "filter_range_picker('Halftone','colorhalftone')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/other/sep.png'>" + trans.Sepia[language],
        buttononclick: "filter_range_picker('Sepia','sepia')"
    }]
});
thisApp.picker_range_toolshtml = [];
thisApp.picker_range_tools = [];
thisApp.picker_range_tools.push({
    type: "filters",
    name: "BrightCont",
    effects_count: 2,
    picker_height: "158",
    rangesfunctions: [{
        name: trans.Brightness[language],
        oninput: "APP.brightness = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen();",
        ontouchend: "update_screen()",
        min: "-0.90",
        max: "1",
        step: "0.01",
        value: "0"
    }, {
        name: trans.Contrast[language],
        oninput: "APP.contrast = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen();",
        ontouchend: "update_screen()",
        min: "0.05",
        max: "10",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "SatHue",
    effects_count: 2,
    picker_height: "158",
    rangesfunctions: [{
        name: trans.Hue[language],
        oninput: "APP.hueShift = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen();",
        ontouchend: "update_screen()",
        min: "0",
        max: "1",
        step: "0.01",
        value: "0"
    }, {
        name: trans.Saturation[language],
        oninput: "APP.saturation = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen();",
        ontouchend: "update_screen()",
        min: "-1",
        max: "0.90",
        step: "0.01",
        value: "0"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "ExpoGam",
    effects_count: 2,
    picker_height: "158",
    rangesfunctions: [{
        name: trans.Exposure[language],
        oninput: "APP.exposure = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen();",
        ontouchend: "update_screen()",
        min: "-5",
        max: "5",
        step: "0.01",
        value: "0"
    }, {
        name: trans.Gamma[language],
        oninput: "APP.gamma = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen();",
        ontouchend: "update_screen()",
        min: "0.1",
        max: "10",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "Normal Blur",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.triangle_blur[language],
        oninput: "APP.triangleBlurDeltaHorizontal=APP.triangleBlurDeltaVertical = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val())",
        ontouchend: "update_screen()",
        min: "0",
        max: "0.2",
        step: "0.01",
        value: "0.02"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "Pixelate",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.hexagonal_pixelate[language],
        oninput: "APP.hexagonalPixelateScale = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0.50",
        max: "30",
        step: "0.01",
        value: "9.01"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "Vibrance",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.vibrance[language],
        oninput: "APP.vibranceAmount = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0",
        max: "3",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "Sharpen",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.sharpen[language],
        oninput: "APP.sharpenAmount = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0",
        max: "25",
        step: "0.01",
        value: "1.5"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "Halftone",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.colorhalftone[language],
        oninput: "APP.colorhalftoneScale = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0.1",
        max: "10",
        step: "0.1",
        value: "5"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "Sepia",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.Sepia[language],
        oninput: "APP.sepiaAmount = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0",
        max: "2",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "RGB",
    effects_count: 3,
    picker_height: "188",
    rangesfunctions: [{
        name: trans.Red[language],
        oninput: "APP.redChannel = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0",
        max: "2",
        step: "0.01",
        value: "1"
    }, {
        name: trans.Green[language],
        oninput: "APP.greenChannel = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0",
        max: "2",
        step: "0.01",
        value: "1"
    }, {
        name: trans.Blue[language],
        oninput: "APP.blueChannel = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());update_screen()",
        ontouchend: "",
        min: "0",
        max: "2",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "filters",
    name: "Zoom",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.Strength[language],
        oninput: "APP.zoomBlurStrength = $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "update_screen()",
        min: "0",
        max: "1",
        step: "0.01",
        value: "0.2"
    }]
});

function prepare_picker_range_tools_pickers() {
    for (var i = 0; i < thisApp.picker_range_tools.length; i++) {
        var a = "";
        for (var t = 0; t < thisApp.picker_range_tools[i].effects_count; t++) {
            var b = thisApp.picker_range_tools[i].rangesfunctions[t];
            var c = '<li>\n                        <div class="item-content">\n                            <div class="item-inner" style="padding-right: 0px;margin-left: 0px;">\n                                <div class="item-title label rangestitle">' + thisApp.picker_range_tools[i].rangesfunctions[t].name + '</div>\n                                <div class="item-input" style="margin-left: 1px;">\n                                    <div class="range-slider" style="padding-left: 6px;">\n                                        <input style="transform:rotate(180deg)" id="shadowblur" min="' + b.min + '" max="' + b.max + '" value="' + b.value + '" step="' + b.step + '" onchange="" onmouseup="update_screen();" ontouchend="' + b.ontouchend + '" oninput="' + b.oninput + '" type="range">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="shadowrangevalue">' + b.value + "</div>\n                    </li>";
            if (a == "") a = c;
            else a += c
        }
        if (thisApp.picker_range_tools[i].type == "filters") thisApp.picker_range_toolshtml[i] = {
            name: thisApp.picker_range_tools[i].name,
            html: '\n\t\t\t\t\t\t\t\t\t<div style="z-index: 13001;height: ' + thisApp.picker_range_tools[i].picker_height + 'px !important;" class="picker-modal untouchablediv sketchstylesranges theme-orange shadowpickermodal">\n\t\t\t\t\t\t\t\t\t  <div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t\t\t<div class="toolbar-inner close-picker">\n\t\t\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill" onclick="remove_pointers_if_there_is_any();cancel_effects();"><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill " onclick="remove_pointers_if_there_is_any();apply_screen_to_texture()"><img class="pickertoolbarbutton" src="icons/common/check.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t\t\t<div class="content-block" style="height:100%;direction:rtl;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="list-block">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul" style="height: 140px;overflow-y: auto;overflow-x:hidden">\n\t\t\t\t\t\t\t\t\t\t\t\t' + a + "\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>"
        };
        else if (thisApp.picker_range_tools[i].type == "textoptions") thisApp.picker_range_toolshtml[i] = {
            name: thisApp.picker_range_tools[i].name,
            html: '\n\t\t\t\t\t\t\t\t\t<div style="z-index: 13001;height: ' + thisApp.picker_range_tools[i].picker_height + 'px !important;" class="picker-modal untouchablediv sketchstylesranges theme-orange shadowpickermodal">\n\t\t\t\t\t\t\t\t\t  <div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t\t\t<div class="toolbar-inner close-picker">\n\t\t\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill" onclick="close_text_picker(\'' + thisApp.picker_range_tools[i].name + '\')"><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill" onclick=""><img class="pickertoolbarbutton" src="icons/common/check.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t\t\t<div class="content-block" style="height:100%;direction:rtl;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="list-block">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul" style="height: 140px;overflow-y: auto;overflow-x:hidden">\n\t\t\t\t\t\t\t\t\t\t\t\t' + a + "\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>"
        };
        else thisApp.picker_range_toolshtml[i] = {
            name: thisApp.picker_range_tools[i].name,
            html: '\n\t\t\t\t\t\t\t\t\t<div style="z-index: 13001;height: ' + thisApp.picker_range_tools[i].picker_height + 'px !important;" class="picker-modal untouchablediv sketchstylesranges theme-orange shadowpickermodal">\n\t\t\t\t\t\t\t\t\t  <div class="toolbar shadowpickermodaltoolbar">\n\t\t\t\t\t\t\t\t\t\t<div class="toolbar-inner close-picker">\n\t\t\t\t\t\t\t\t\t\t\t<div class="left touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="height: 45px; padding-top: 0px;margin-top: 0px;" class="pickerclosebutton close-picker button button-fill" onclick=""><img class="pickertoolbarbutton" src="icons/common/close.png"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="right touchablediv" style="">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="picker-modal-inner touchablediv">\n\t\t\t\t\t\t\t\t\t\t<div class="content-block" style="height:100%;direction:rtl;padding: 0 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="list-block">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class="rangesul" style="height: 140px;overflow-y: auto;overflow-x:hidden">\n\t\t\t\t\t\t\t\t\t\t\t\t' + a + "\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>"
        }
    }
}

function filter_range_picker(a, b) {
    var c = thisApp.picker_range_toolshtml.filter(function(e) {
        return e.name == a
    })[0].html;
    var d = myApp.pickerModal(c);
    APP.mode.name = b;
    add_pointers_if_there_is_any();
    set_defaults();
    update_screen();
    $$(".picker-modal").on("close", function() {
        APP.mode.name = "nofilter";
        APP.showColorWheel = false;
        update_screen();
        toggle_undo_redo_menu_div(1);
        showFullAdRatio(.5)
    });
    toggle_undo_redo_menu_div(0)
}

function remove_pointers_if_there_is_any() {
    if (APP.mode.name == "zoom_blur" || APP.mode.name == "MixedEffects") {
        canvas.remove(canvas.getObjects().getLast());
        canvas_pointer.isrendered = false
    }
}

function add_pointers_if_there_is_any() {
    if (APP.mode.name == "zoom_blur" || APP.mode.name == "MixedEffects") Add_canvas_pointer()
};
//---------- 04filtools.js end ----------
//---------- From 05txt.js ----------
var tbold = {
    english: "Bold",
    arabic: "\u062a\u0641\u062e\u064a\u0645"
};
var titalic = {
    english: "Italic",
    arabic: "\u062a\u0645\u0627\u064a\u0644"
};
var tunderline = {
    english: "Underline",
    arabic: "\u062e\u0637 \u0633\u0641\u0644\u064a"
};
var tthrough = {
    english: "Through",
    arabic: "\u062e\u0637 \u0645\u062a\u0648\u0633\u0637"
};
var tupperline = {
    english: "Upperline",
    arabic: "\u062e\u0637 \u0639\u0644\u0648\u064a"
};
var tnone = {
    english: "None",
    arabic: "\u0628\u062f\u0648\u0646 \u062e\u0637"
};

function prepare_text_modal(a) {
    check_if_anything_changed();
    var b = a || "create";
    var c = a == "edit" ? canvas.getActiveObject().text : "";
    var d = a == "edit" ? "none" : "block";
    myApp.modal({
        text: '\n\t\t<textarea onclick="click_on_text_box_event()" oninput="edit_textbox($(this))" placeholder="' + trans.textareaholder[language] + '" style="height: 67px; top: 8px; position: absolute; left: 0px; right: 0px; width: calc(100% - 80px); margin: auto; border: none;resize: none;" class="">' + c + "</textarea>\n\n\t\t\t<a onclick=\"cancel_edit_from_textbox_and_close_modal('" + b + '\')" class="button" style="min-width: 56px;left: -13px;top: calc(100% + 43px);position: absolute;padding: 0;display:' + d + '">\n\t\t\t\t<img src="icons/common/close.png" style="width: 25px;height: 25px;margin-top: 5px;margin-left: 12px;">\n\t\t\t</a>\n\n\t\t<a onclick="set_text_from_textbox_and_close_modal(\'' + b + '\')" class="button" style="min-width: 56px;right: -13px;top: calc(100% + 43px);position: absolute;padding: 0;">\n\t\t\t\t<img src="icons/common/check.png" style="width: 25px;height: 25px;margin-top: 5px;margin-right: 16px;max-width: 32px;max-height: 32px;">\n\t\t\t</a>\n\t\t<a onclick="open_color_picker_for_fill_from_inside()" class="button" style="min-width: 9px;right: 4px;top: 30px;position: absolute;padding: 0;max-width: 29px;">\n\t\t\t\t<img style="width: 83%;height: auto;margin-top: 4px;margin-right: 0px;" src="icons/text/rgbcolorpicker.png">\n\t\t\t</a>\n\t\t<div class="page-content"> <div class="content-block"> <div class="buttons-row"> <a href="#tab1" class="tab-link active button">Tab 1</a> <a href="#tab2" class="tab-link button">Tab 2</a> <a href="#tab3" class="tab-link button">Tab 3</a> </div></div><div class="tabs"> <div id="tab1" class="tab active"> <div class="content-block"> <p>This is tab 1 content</p>... </div></div><div id="tab2" class="tab"> <div class="content-block"> <p>This is tab 2 content</p>... </div></div><div id="tab3" class="tab"> <div class="content-block"> <div class="" style="width: 164px;"><span class="modal-button" style="min-width: 44px; padding: 0px;"><img onclick="set_text_align(\'left\', true)" src="icons/text/left-alignment.png" style="width: 50%;height: auto;margin-top: 7px;"></span><span class="modal-button" style="min-width: 44px; padding: 0px;"><img  onclick="set_text_align(\'center\', true)"  src="icons/text/center-alignment.png" style="width: 50%;height: auto;margin-top: 7px;"></span><span class="modal-button" style="min-width: 44px; padding: 0px;"><img src="icons/text/right-alignment.png"  onclick="set_text_align(\'right\', true)"  style="width: 50%;height: auto;margin-top: 7px;"></span></div></div></div></div>'
    });
  
    $("textarea").css("direction", thisApp.canvasdir);
   
    if (b == "create") {
        $("textarea").css("text-align", "center");
        add_new_text("create")
    } else $("textarea").css("text-align", canvas.getActiveObject().textAlign);
    
    $(".modal").css({
        "width": "100%",
        "left": "0",
        "right": "0",
        "top": "0",
        "margin": "auto",
        "bottom": "0px"
    });
    $(".modal-buttons").css({
        "width": "164px"
    });
    $(".modal-buttons .modal-button").css({
        "min-width": "44px",
        "padding": "0"
    });
    move_canvas_to_max_top(true, true);
    canvas.getActiveObject().setControlsVisibility({
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mt: false,
        mb: false,
        ml: false,
        mtr: false,
        mr: false
    });
    canvas.renderAll();
    $$(".modal").on("opened", function() {
        $("textarea").trigger("focus");
        $("textarea")[0].setSelectionRange(3E3, 3E3)
    });
    $$(".modal").on("close", function() {
        showFullAdRatio(.5);
        check_if_anything_changed("after")
    })
}

function open_color_picker_for_fill_from_inside() {
    if ($(".picker-modal ").length == 1) myApp.closeModal(".picker-modal ");
    else prepare_color_wheel_forshape("fill", canvas.getActiveObject(), false, true)
}

function set_text_align(a, b) {
    if (b) set_textbox_align(a);
    canvas.getActiveObject().textAlign = a;
    canvas.renderAll()
}

function set_textbox_align(a) {
    $("textarea").css("text-align", a)
}

function set_text_from_textbox_and_close_modal(a) {
    var b = canvas.getActiveObject();
    if ($.trim(b.text) == "") {
        canvas.remove(b);
        canvas.renderAll()
    } else if (a == "create") {
        var c = b.getHeight();
        for (var i = b.getWidth(); i > 0; i -= 50) {
            b.setWidth(i);
            if (c < b.getHeight()) {
                b.setWidth(i + 50);
                break
            }
            b.centerH();
            b.setCoords();
            canvas.renderAll()
        }
    }
    myApp.closeModal();
    move_canvas_to_max_top(false);
    return_canvas_after_editing_pickers_close()
}

function cancel_edit_from_textbox_and_close_modal(a) {
    myApp.closeModal();
    if (a == "create") {
        canvas.remove(canvas.getActiveObject());
        canvas.renderAll()
    } else if ($.trim(canvas.getActiveObject().text) == "") {
        canvas.remove(canvas.getActiveObject());
        canvas.renderAll()
    }
    move_canvas_to_max_top(false);
    return_canvas_after_editing_pickers_close()
}

function add_new_text(a, b) {
    if (a == "create") {
        var c = 40;
        var d = 25;
        var e = b || "";
        var f = parseFloat(canvas.getWidth() / $("#maincanvas").width()) * 30;
        var g = new fabric.Textbox(e, {
            width: canvas.getWidth() - 100,
            top: d,
            left: c,
            editable: false,
            fontSize: f,
            borderColor: "transparent",
            cursorWidth: 0,
            fontFamily: "mainfont",
            movebutton: false
        });
        canvas.add(g);
        g.setControlsVisibility({
            bl: true,
            br: true,
            tl: true,
            tr: true,
            mt: false,
            mb: false,
            ml: false,
            mtr: false,
            mr: false
        });
        g.centeredScaling = true;
        g.minScaleLimit = .01;
        g.setTextAlign($("textarea").css("text-align"));
        g.strokeLineJoin = "round";
        g.strokeLineCap = "round";
        canvas.setActiveObject(g);
        canvas.renderAll()
    }
}

function edit_textbox(a, b) {
    var c = a.val();
    var d = canvas.getActiveObject();
    d.setText(c);
    canvas.renderAll()
}

function move_canvas_to_max_top(a, b) {
    if (b == undefined) var c = false;
    if (a) {
        var d = canvas.getActiveObject();
        var e = Math.min(d.oCoords.bl.y, d.oCoords.br.y, d.oCoords.mb.y, d.oCoords.ml.y, d.oCoords.mr.y, d.oCoords.mt.y, d.oCoords.tl.y, d.oCoords.tr.y) + parseFloat(d.cornerSize) / 2;
        var f = e / canvas.getHeight() * $("#maincanvas").height();
        var g = ($(".canvasoutterdiv").innerHeight() - $(".canvas-container").innerHeight()) / 2 - (b ? 56 : 0);
        var h = (g + f) * -1;
        $(".canvasoutterdiv").css("margin-top", h + "px")
    } else $(".canvasoutterdiv").css("margin-top", 0);
    $(".canvasinnerdiv").css("top", 0).css("left", 0).css("transform", "matrix(1,0,0,1,0,0)")
}

function click_on_text_box_event() {
    if ($("#colorwheel").length != 0) myApp.closeModal(".picker-modal")
}

function set_text_background_opacity(a) {
    var b = canvas.getActiveObject();
    var c = b.textBackgroundColor;
    var d = a;
    if (c != "") {
        var e = c.split(",")[0].split("(")[1];
        var f = c.split(",")[1];
        var g = c.split(",")[2];
        c = "rgba(" + e + "," + f + "," + g + "," + d + ")"
    } else c = "rgba(" + 0 + "," + 0 + "," + 0 + "," + d + ")";
    b.setTextBackgroundColor(c);
    canvas.renderAll()
}

function set_text_stroke_opacity(a) {
    var b = canvas.getActiveObject();
    var c = b.stroke;
    var d = a;
    if (c != "") {
        var e = c.split(",")[0].split("(")[1];
        var f = c.split(",")[1];
        var g = c.split(",")[2];
        c = "rgba(" + e + "," + f + "," + g + "," + d + ")"
    } else c = "rgba(" + 255 + "," + 0 + "," + 0 + "," + d + ")";
    b.stroke = c;
    canvas.renderAll()
}

function set_text_stroke_width(a, b) {
    var c = b || canvas.getActiveObject();
    var d = c.stroke;
    var e = a;
    if (d == null || get_opacity_from_color(d) == "0") {
        d = invert_color(c.fill);
        c.stroke = d
    }
    c.strokeWidth = parseFloat(e);
    canvas.renderAll()
}

function remove_tstroke() {
    check_if_anything_changed();
    var a = canvas.getActiveObject();
    a.stroke = null;
    a.strokeWidth = 1;
    canvas.renderAll();
    check_if_anything_changed("after")
}

function set_tbc_w_or_h(a, b, c, d) {
    var e = canvas.getActiveObject();
    var f = e.textBackgroundColor;
    if (a) e.backgroundcolor_width = a;
    if (b) e.backgroundcolor_leftoffset = b;
    if (c) e.backgroundcolor_height = c;
    if (d) e.backgroundcolor_topoffset = d;
    if (f == "") {
        f = "rgba(" + 0 + "," + 0 + "," + 0 + "," + .5 + ")";
        e.setTextBackgroundColor(f)
    }
    canvas.renderAll()
}

function remove_tbc() {
    check_if_anything_changed();
    var a = canvas.getActiveObject();
    a.textBackgroundColor = "";
    a.backgroundcolor_width = 0;
    a.backgroundcolor_leftoffset = 0;
    a.backgroundcolor_height = 0;
    a.backgroundcolor_topoffset = 0;
    canvas.renderAll();
    check_if_anything_changed("after")
}

function set_shadowoffset(a, b, c) {
    var d = canvas.getActiveObject();
    var e = d.shadow;
    if (d.shadow == null) {
        d.setShadow({
            color: "rgba(255,0,0,1)"
        });
        if (d.shadow.blur == 0) d.shadow.blur = 5
    }
    if (a) d.shadow.offsetX = a;
    if (b) d.shadow.offsetY = b;
    if (c) d.shadow.blur = c;
    canvas.renderAll()
}

function set_text_shadow_opacity(a) {
    var b = canvas.getActiveObject();
    if (b.shadow == null) {
        b.setShadow({
            color: "rgba(255,0,0," + a + ")"
        });
        if (b.shadow.blur == 0) b.shadow.blur = 5
    } else {
        var c = b.shadow.color;
        var d = a;
        var e = c.split(",")[0].split("(")[1];
        var f = c.split(",")[1];
        var g = c.split(",")[2];
        c = "rgba(" + e + "," + f + "," + g + "," + d + ")";
        b.shadow.color = c
    }
    canvas.renderAll()
}

function remove_tshadow() {
    check_if_anything_changed();
    var a = canvas.getActiveObject();
    a.shadow = null;
    canvas.renderAll();
    check_if_anything_changed("after")
}

function go_to_textdecor(a) {
    var b = a;
    var c = '<div class="popover" style="width: 120px;text-align: center;margin-left: 20px;margin-top: -20px;">\n                      <div class="popover-inner">\n                        <div class="list-block">\n                          <ul>\n\t\t\t\t\t\t\t<li onclick="canvas.getActiveObject().setTextDecoration(\'underline\');canvas.renderAll();">\n\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="underline">\n\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="text-decoration: underline;">' + tunderline[language] + '</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li onclick="canvas.getActiveObject().setTextDecoration(\'line-through\');canvas.renderAll();">\n\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="linethrough">\n\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="text-decoration: line-through">' + tthrough[language] + '</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li onclick="canvas.getActiveObject().setTextDecoration(\'overline\');canvas.renderAll()">\n\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="overline" >\n\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="text-decoration: overline">' + tupperline[language] + '</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li onclick="canvas.getActiveObject().setTextDecoration(\'\');canvas.renderAll()">\n\t\t\t\t\t\t\t  <label class="label-radio item-content">\n\t\t\t\t\t\t\t\t<input type="radio" name="my-radio" value="noline">\n\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t  <i class="icon icon-form-radio"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t  <div class="item-title item-media-title">' + tnone[language] + "</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t</li>\n\n                          </ul>\n                        </div>\n                      </div>\n                    </div>";
    var d = myApp.popover(c, b);
    var e = canvas.getActiveObject().getTextDecoration();
    if (e == "underline") $($(".label-radio input")[0]).attr("checked", "checked");
    else if (e == "line-through") $($(".label-radio input")[1]).attr("checked", "checked");
    else if (e == "overline") $($(".label-radio input")[2]).attr("checked", "checked");
    else $($(".label-radio input")[3]).attr("checked", "checked");
    check_if_anything_changed();
    $$(".popover").on("closed", function() {
        check_if_anything_changed("after")
    })
}

function text_weight_style() {
    var a = canvas.getActiveObject();
    var b = $($(".label-checkbox input")[0]).prop("checked");
    var c = $($(".label-checkbox input")[1]).prop("checked");
    if (b) a.setFontWeight("bold");
    else a.setFontWeight("normal");
    if (c) a.setFontStyle("italic");
    else a.setFontStyle("normal");
    canvas.renderAll()
}
function text_bold(){
    var a = canvas.getActiveObject();
    if(a.getFontWeight() === "bold"){
        a.setFontWeight("normal");
    }else {
        a.setFontWeight("bold");
    }
    canvas.renderAll()

}
function text_italic(){
    var a = canvas.getActiveObject();
    if(a.getFontStyle() === "italic"){
        a.setFontStyle("normal");
    }else {
        a.setFontStyle("italic");
    }
    canvas.renderAll()
}
function text_underline(){
    var a = canvas.getActiveObject();
    if(a.getTextDecoration() === "underline"){
        a.setTextDecoration("");
    }else {
        a.setTextDecoration("underline");
    }
    canvas.renderAll()
}
function text_overline(){
     var a = canvas.getActiveObject();
    if(a.getTextDecoration() === "overline"){
        a.setTextDecoration("");
    }else {
        a.setTextDecoration("overline");
    }
    canvas.renderAll()
}
function text_line_through(){
      var a = canvas.getActiveObject();
    if(a.getTextDecoration() === "line-through"){
        a.setTextDecoration("");
    }else {
        a.setTextDecoration("line-through");
    }
    canvas.renderAll()
}

function go_to_textstyle(a) {
    check_if_anything_changed();
    var b = a;
    var c = '<div class="popover" style="width: 100px;text-align: center;margin-left: 20px;margin-top: -20px;">\n                      <div class="popover-inner">\n                        <div class="list-block" onchange="text_weight_style()">\n                          <ul>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t  <label class="label-checkbox item-content">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="my-checkbox" value="\u062a\u0641\u062e\u064a\u0645" >\n\t\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t\t  <i class="icon icon-form-checkbox"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="font-weight:bold">' + tbold[language] + '</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t  <label class="label-checkbox item-content">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" name="my-checkbox" value="\u062a\u0645\u0627\u064a\u0644" >\n\t\t\t\t\t\t\t\t\t<div class="item-media item-media-radio-check">\n\t\t\t\t\t\t\t\t\t  <i class="icon icon-form-checkbox"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="item-inner">\n\t\t\t\t\t\t\t\t\t  <div class="item-title item-media-title" style="font-style: italic;">' + titalic[language] + "</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t\t\t</li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>";
    var d = myApp.popover(c, b);
    var e = canvas.getActiveObject();
    if (e.getFontWeight() == "bold") $($(".label-checkbox input")[0]).prop("checked", true);
    if (e.getFontStyle() == "italic") $($(".label-checkbox input")[1]).prop("checked", true);
    $$(".popover").on("closed", function() {
        check_if_anything_changed("after")
    })
}
thisApp.menus.push({
    name: "textmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu();canvas.deactivateAll();canvas.discardActiveGroup();canvas.renderAll();"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/edittext.png'>" + trans.edit[language],
        buttononclick: "prepare_text_modal('edit');"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/rgbcolorpicker.png'>" + trans.color[language],
        buttononclick: "prepare_color_wheel_forshape('fill',canvas.getActiveObject(),true,true)"
    }, 
    //{
    //     buttonname: "<img class='toolbarmenuicon' src='icons/text/fonts.png'>" + trans.fonts[language],
    //     buttononclick: "fonts_popover($(this))"
    // },
    {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/fonts.png'>" + trans.fonts[language],
        buttononclick: "font_picker()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textsize.png'>" + trans.textsize[language],
        buttononclick: "textsettings_range_picker('Text Size')"
     }, 
    {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textBold.png'> Bold",
        buttononclick: "text_bold()"
    },{
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textItalic.png'> Italic",
        buttononclick: "text_italic()"
    },
     {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textunderline.png'> Underline",
        buttononclick: "text_underline();"
    },
     {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/text-upperline.png'> Overline",
        buttononclick: "text_overline();"
    },
     {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/text-strike.png'> strikethrough",
        buttononclick: "text_line_through();"
    }
    ,{
        buttonname: "<img class='toolbarmenuicon' src='icons/text/lineheight.png'>" + trans.lineheight[language],
        buttononclick: "textsettings_range_picker('Line Height')"
    },
    {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/textshadowposition.png'>" + trans.shadowpostion[language],
        buttononclick: "textsettings_range_picker('Shadow Position')"
    },
    {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/textshadowcolor.png'>" + trans.shadowcolor[language],
        buttononclick: "prepare_color_wheel_forshape('shadowcolor',canvas.getActiveObject(),true)"
    },  {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/textshadowopacityspread.png'>" + trans.shadowspread[language],
        buttononclick: "textsettings_range_picker('Spread')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/removetextshadow.png'>" + trans.removeshadow[language],
        buttononclick: "remove_tshadow()"
    },

     {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/textbackgroundcolor.png'>" + trans.bccolor[language],
        buttononclick: "prepare_color_wheel_forshape('textBackgroundColor',canvas.getActiveObject(),true)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/textbackgroundwidth.png'>" + trans.bcwidth[language],
        buttononclick: "textsettings_range_picker('BC Width')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/textbackgroundheight.png'>" + trans.bcheight[language],
        buttononclick: "textsettings_range_picker('BC Height')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/removetextbackground.png'>" + trans.removebc[language],
        buttononclick: "remove_tbc()"
    },

     {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/stroke/textstrokecolor.png'>" + trans.strokecolor[language],
        buttononclick: "prepare_color_wheel_forshape('stroke',canvas.getActiveObject(),true)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/stroke/textstrokewidth.png'>" + trans.strokethickness[language],
        buttononclick: "textsettings_range_picker('Stroke Thickness')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/stroke/removetextstroke.png'>" + trans.removestroke[language],
        buttononclick: "remove_tstroke()"
    },
    {
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu();"
    },

    // ,{
    //     buttonname: "<img class='toolbarmenuicon' src='icons/text/sty.png'>" + trans.style[language],
    //     buttononclick: "go_to_menu('texttools')"
    // }
]
});
thisApp.menus.push({
    name: "texttools",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu();"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textbackground.png'>" + trans.textbackground[language],
        buttononclick: "go_to_menu('textbackgroundmenu')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textstroke.png'>" + trans.stroke[language],
        buttononclick: "go_to_menu('textstrokemenu')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textshadow.png'>" + trans.shadow[language],
        buttononclick: "go_to_menu('textshadowmenu')"
    }]
});
thisApp.menus.push({
    name: "textdecor",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu();"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textstyle.png'>" + trans.shape[language],
        buttononclick: "go_to_textstyle($(this))"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/textunderline.png'>" + trans.highlight[language],
        buttononclick: "go_to_textdecor($(this))"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/lineheight.png'>" + trans.lineheight[language],
        buttononclick: "textsettings_range_picker('Line Height')"
    }]
});
thisApp.menus.push({
    name: "textbackgroundmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/textbackgroundcolor.png'>" + trans.bccolor[language],
        buttononclick: "prepare_color_wheel_forshape('textBackgroundColor',canvas.getActiveObject(),true)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/textbackgroundwidth.png'>" + trans.bcwidth[language],
        buttononclick: "textsettings_range_picker('BC Width')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/textbackgroundheight.png'>" + trans.bcheight[language],
        buttononclick: "textsettings_range_picker('BC Height')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/background/removetextbackground.png'>" + trans.removebc[language],
        buttononclick: "remove_tbc()"
    }]
});
thisApp.menus.push({
    name: "textstrokemenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/stroke/textstrokecolor.png'>" + trans.strokecolor[language],
        buttononclick: "prepare_color_wheel_forshape('stroke',canvas.getActiveObject(),true)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/stroke/textstrokewidth.png'>" + trans.strokethickness[language],
        buttononclick: "textsettings_range_picker('Stroke Thickness')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/stroke/removetextstroke.png'>" + trans.removestroke[language],
        buttononclick: "remove_tstroke()"
    }]
});
thisApp.menus.push({
    name: "textshadowmenu",
    buttons: [{
        buttonname: "<img class='toolbarmenuicon' src='icons/common/back.png'>" + trans.back[language],
        buttononclick: "go_back_to_last_menu()"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/textshadowcolor.png'>" + trans.shadowcolor[language],
        buttononclick: "prepare_color_wheel_forshape('shadowcolor',canvas.getActiveObject(),true)"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/textshadowposition.png'>" + trans.shadowpostion[language],
        buttononclick: "textsettings_range_picker('Shadow Position')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/textshadowopacityspread.png'>" + trans.shadowspread[language],
        buttononclick: "textsettings_range_picker('Spread')"
    }, {
        buttonname: "<img class='toolbarmenuicon' src='icons/text/shadow/removetextshadow.png'>" + trans.removeshadow[language],
        buttononclick: "remove_tshadow()"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "BC Width",
    effects_count: 2,
    picker_height: "158",
    rangesfunctions: [{
        name: trans.width[language],
        oninput: "set_tbc_w_or_h($(this).val()*2,false,false,false); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "",
        min: "0",
        max: "500",
        step: "1",
        value: "0"
    }, {
        name: trans.offset[language],
        oninput: "set_tbc_w_or_h(false,$(this).val()*2,false,false);$($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "",
        min: "-250",
        max: "250",
        step: "1",
        value: "0"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "BC Height",
    effects_count: 2,
    picker_height: "158",
    rangesfunctions: [{
        name: trans.height[language],
        oninput: "set_tbc_w_or_h(false,false,$(this).val()*2,false); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "",
        min: "0",
        max: "500",
        step: "1",
        value: "0"
    }, {
        name: trans.offset[language],
        oninput: "set_tbc_w_or_h(false,false,false,$(this).val()*2); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "",
        min: "-250",
        max: "250",
        step: "1",
        value: "0"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "BC Opacity",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.opacity[language],
        oninput: "set_text_background_opacity($(this).val()); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());canvas.renderAll();",
        ontouchend: "",
        min: "0",
        max: "1",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Opacity",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.opacity[language],
        oninput: "canvas.getActiveObject().opacity= $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());canvas.renderAll();",
        ontouchend: "",
        min: "0",
        max: "1",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Line Height",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.height[language],
        oninput: "canvas.getActiveObject().lineHeight= $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());canvas.renderAll();",
        ontouchend: "",
        min: "0.50",
        max: "3",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Stroke Opacity",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.opacity[language],
        oninput: "set_text_stroke_opacity($(this).val()); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());canvas.renderAll();",
        ontouchend: "",
        min: "0",
        max: "1",
        step: "0.01",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Stroke Thickness",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.thickness[language],
        oninput: "set_text_stroke_width($(this).val()); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());canvas.renderAll();",
        ontouchend: "",
        min: "0",
        max: "100",
        step: "1",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Border Thickness",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.thickness[language],
        oninput: "set_text_stroke_width($(this).val(),thisApp.editedobj); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());canvas.renderAll();",
        ontouchend: "",
        min: "0",
        max: "100",
        step: "1",
        value: "1"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Shadow Position",
    effects_count: 2,
    picker_height: "158",
    rangesfunctions: [{
        name: trans.offsetx[language],
        oninput: "set_shadowoffset($(this).val(),false,false); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "",
        min: "0",
        max: "500",
        step: "1",
        value: "0"
    }, {
        name: trans.offsety[language],
        oninput: "set_shadowoffset(false,$(this).val(),false); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "",
        min: "-250",
        max: "250",
        step: "1",
        value: "0"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Spread",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.shadowspread[language],
        oninput: "set_shadowoffset(false,false,$(this).val()); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());",
        ontouchend: "",
        min: "1",
        max: "15",
        step: "1",
        value: "5"
    }]
});
thisApp.picker_range_tools.push({
    type: "textoptions",
    name: "Text Size",
    effects_count: 1,
    picker_height: "102",
    rangesfunctions: [{
        name: trans.size[language],
        oninput: "canvas.getActiveObject().fontSize= $(this).val(); $($(this).closest('li')).children('.shadowrangevalue').html($(this).val());canvas.renderAll();",
        ontouchend: "",
        min: "15",
        max: "199",
        step: "1",
        value: "1"
    }]
});

function textsettings_range_picker(a) {
    check_if_anything_changed();
    var b = thisApp.picker_range_toolshtml.filter(function(e) {
        return e.name == a
    })[0].html;
    var c = myApp.pickerModal(b);
    if (a == "BC Width") {
        set_tbc_w_or_h(canvas.getActiveObject().backgroundcolor_width || canvas.getWidth(), false, false, false);
        $($("input")[0]).attr("max", canvas.getWidth() + 5);
        $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().backgroundcolor_width / 2 || canvas.getWidth() / 2);
        $($("input")[0]).val(canvas.getActiveObject().backgroundcolor_width / 2 || canvas.getWidth() / 2);
        $($("input")[1]).attr("max", canvas.getWidth() / 2 + 5);
        $($("input")[1]).attr("min", -canvas.getWidth() / 2 - 5);
        $($("input")[1]).val(canvas.getActiveObject().backgroundcolor_leftoffset / 2 || 0);
        $($(".shadowrangevalue")[1]).html(canvas.getActiveObject().backgroundcolor_leftoffset / 2 || 0)
    } else if (a == "BC Height") {
        set_tbc_w_or_h(canvas.getActiveObject().backgroundcolor_width || canvas.getWidth(), false, false, false);
        $($("input")[0]).attr("max", canvas.getHeight() + 5);
        $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().backgroundcolor_height / 2 || 0);
        $($("input")[0]).val(canvas.getActiveObject().backgroundcolor_height / 2 || 0);
        $($("input")[1]).attr("max", canvas.getHeight() / 2 + 5);
        $($("input")[1]).attr("min", -canvas.getHeight() / 2 - 5);
        $($("input")[1]).val(canvas.getActiveObject().backgroundcolor_topoffset / 2 || 0);
        $($(".shadowrangevalue")[1]).html(canvas.getActiveObject().backgroundcolor_topoffset / 2 || 0)
    } else if (a == "BC Opacity") {
        set_tbc_w_or_h(canvas.getActiveObject().backgroundcolor_width || canvas.getWidth(), false, false, false);
        if (canvas.getActiveObject().textBackgroundColor.split(",").getLast().split(")")[0] != "") {
            $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().textBackgroundColor.split(",").getLast().split(")")[0]);
            $($("input")[0]).val(parseFloat(canvas.getActiveObject().textBackgroundColor.split(",").getLast().split(")")[0]))
        }
    } else if (a == "Stroke Opacity") {
        if (canvas.getActiveObject().stroke.split(",").getLast().split(")")[0] != "") {
            $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().stroke.split(",").getLast().split(")")[0]);
            $($("input")[0]).val(parseFloat(canvas.getActiveObject().stroke.split(",").getLast().split(")")[0]))
        }
    } else if (a == "Stroke Thickness") {
        set_text_stroke_width("5");
        $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().strokeWidth);
        $($("input")[0]).val(parseFloat(canvas.getActiveObject().strokeWidth))
    } else if (a == "Border Thickness") {
        $($(".shadowrangevalue")[0]).html(thisApp.editedobj.strokeWidth);
        $($("input")[0]).val(parseFloat(thisApp.editedobj.strokeWidth))
    } else if (a == "Shadow Position") {
        $($("input")[0]).attr("max", canvas.getWidth() / 4);
        $($("input")[1]).attr("max", canvas.getActiveObject().height);
        $($("input")[0]).attr("min", -canvas.getWidth() / 4);
        $($("input")[1]).attr("min", -canvas.getActiveObject().height);
        if (canvas.getActiveObject().shadow == null) {
            canvas.getActiveObject().setShadow({
                color: "rgba(0,0,0,1)",
                offsetX: "4",
                offsetY: "5"
            });
            canvas.getActiveObject().shadow.blur = 5;
            canvas.renderAll()
        }
        $($(".shadowrangevalue")[0]).html(parseInt(canvas.getActiveObject().shadow.offsetX));
        $($("input")[0]).val(parseInt(canvas.getActiveObject().shadow.offsetX));
        $($("input")[1]).val(parseInt(canvas.getActiveObject().shadow.offsetY));
        $($(".shadowrangevalue")[1]).html(parseInt(canvas.getActiveObject().shadow.offsetY))
    } else if (a == "Spread")
        if (canvas.getActiveObject().shadow != null) {
            $($("input")[0]).val(parseInt(canvas.getActiveObject().shadow.blur));
            $($(".shadowrangevalue")[0]).html(parseInt(canvas.getActiveObject().shadow.blur))
        } else {
            canvas.getActiveObject().setShadow({
                color: "rgba(0,0,0,1)",
                offsetX: "4",
                offsetY: "5"
            });
            canvas.getActiveObject().shadow.blur = 5;
            canvas.renderAll();
            $($("input")[0]).val(parseInt(canvas.getActiveObject().shadow.blur));
            $($(".shadowrangevalue")[0]).html(parseInt(canvas.getActiveObject().shadow.blur))
        }
    else if (a == "Opacity") {
        $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().opacity);
        $($("input")[0]).val(parseFloat(canvas.getActiveObject().opacity))
    } else if (a == "Line Height") {
        $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().lineHeight);
        $($("input")[0]).val(parseFloat(canvas.getActiveObject().lineHeight))
    } else if (a == "Text Size") {
        $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().fontSize);
        $($("input")[0]).val(parseInt(canvas.getActiveObject().fontSize))
    } else if (a == "rect radius") {
        $($(".shadowrangevalue")[0]).html(canvas.getActiveObject().rx);
        $($("input")[0]).val(parseFloat(canvas.getActiveObject().rx))
    }
    $(".modal-overlay").addClass("modal-overlay-visible");
    $(".modal-overlay").attr("onclick", "myApp.closeModal('.picker-modal')");
    var d = canvas.getActiveObject() || thisApp.editedobj;
    move_canvas_when_editing_pickers_open(false, d);
    $$(".picker-modal").on("close", function() {
        showFullAdRatio(.5);
        $(".modal-overlay").removeClass("modal-overlay-visible");
        $(".modal-overlay").removeAttr("onclick");
        toggle_undo_redo_menu_div(1);
        return_canvas_after_editing_pickers_close();
        check_if_anything_changed("after")
    });
    toggle_undo_redo_menu_div(0)
}

function close_text_picker(a) {
    if (a == "BC Width" || a == "BC Height" || a == "BC Opacity") remove_tbc();
    if (a == "Shadow Position" || a == "Spread") remove_tshadow();
    if (a == "Stroke Thickness") remove_tstroke()
};
//---------- 05txt.js end ----------