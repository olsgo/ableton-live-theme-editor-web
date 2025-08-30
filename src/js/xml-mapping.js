/**
 * XML Property to UI Element Mapping System
 * Maps Ableton Live XML theme properties to UI elements
 */

var xmlMapping = {
    // UI Element to XML Property mappings
    mappings: {
        // Desktop and main background
        '#main-container': 'Desktop',
        '#al-app-window': 'SurfaceBackground',
        
        // Browser elements
        '#al-browser-container': 'BrowserBar',
        '#al-browser-collections-container': 'TreeColumnHeadBackground',
        '#al-browser-categories-container': 'TreeRowCategoryBackground',
        '#al-browser-places-container': 'TreeColumnHeadBackground',
        '#al-browser-contents-container': 'SurfaceArea',
        
        // Transport controls
        '#al-global-transport-container': 'TransportOffBackground',
        '#al-global-tempo-container': 'ControlBackground',
        '#al-global-keymidi-container': 'ControlBackground',
        
        // Channel and mixer elements
        '.al-channel': 'SurfaceArea',
        '.al-channel-name': 'ControlForeground',
        '.al-clip-instance': 'BackgroundClip',
        '.al-clip-cell': 'ClipSlotButton',
        '.al-mixer-volume-meter-container': 'MeterBackground',
        '.al-channel-mute-control': 'ControlOnForeground',
        '.al-channel-solo-control': 'ChosenDefault',
        '.al-channel-arm-control': 'ChosenRecord',
        
        // Device elements
        '.al-device': 'ControlBackground',
        '#al-devices-container': 'SurfaceAreaFocus',
        
        // Help and bottom elements
        '#al-help-container': 'DetailViewBackground',
        '#al-help-titlebar': 'TreeColumnHeadForeground',
        '#al-alertbar': 'Alert',
        
        // Control elements
        '.al-knob-send': 'Poti',
        '.al-knob-pan': 'Poti',
        '.al-control-on': 'ControlOnForeground',
        
        // Clip colors (numbered clips)
        '.clip-1': 'Clip1',
        '.clip-2': 'Clip2',
        '.clip-3': 'Clip3',
        '.clip-4': 'Clip4',
        '.clip-5': 'Clip5',
        '.clip-6': 'Clip6',
        '.clip-7': 'Clip7',
        '.clip-8': 'Clip8',
        '.clip-9': 'Clip9',
        '.clip-10': 'Clip10',
        '.clip-11': 'Clip11',
        '.clip-12': 'Clip12',
        '.clip-13': 'Clip13',
        '.clip-14': 'Clip14',
        '.clip-15': 'Clip15',
        '.clip-16': 'Clip16'
    },

    // All available XML properties from Ableton Live
    xmlProperties: [
        'AbletonColor', 'Alert', 'ArrangementRulerMarkings', 'ArrangerGridTiles',
        'AutomationColor', 'AutomationDisabled', 'AutomationGrid', 'AutomationMouseOver',
        'BackgroundClip', 'BackgroundClipFrame', 'BipolarPotiTriangle', 'BipolReset',
        'BrowserBar', 'BrowserBarOverlayHintTextColor', 'BrowserDisabledItem', 'BrowserSampleWaveform',
        'CheckControlNotCheckedBlendFactor', 'ChosenAlert', 'ChosenAlternative', 'ChosenDefault',
        'ChosenPlay', 'ChosenPreListen', 'ChosenRecord', 'Clip10', 'Clip11', 'Clip12',
        'Clip13', 'Clip14', 'Clip15', 'Clip16', 'Clip1', 'Clip2', 'Clip3', 'Clip4',
        'Clip5', 'Clip6', 'Clip7', 'Clip8', 'Clip9', 'ClipBlendFactor', 'ClipBorder',
        'ClipSlotButton', 'ClipText', 'ControlBackground', 'ControlContrastFrame',
        'ControlContrastTransport', 'ControlDisabled', 'ControlFillHandle', 'ControlForeground',
        'ControlOffDisabledForeground', 'ControlOffForeground', 'ControlOnAlternativeForeground',
        'ControlOnDisabledForeground', 'ControlOnForeground', 'ControlSelectionFrame',
        'ControlTextBack', 'DeactivatedPoti', 'DeactivatedPotiNeedle', 'DefaultBlendFactor',
        'Desktop', 'DetailGridTiles', 'DetailViewBackground', 'DetailViewRulerMarkings',
        'DisplayBackground', 'DrumRackScroller1', 'DrumRackScroller2', 'FilledDrumRackPad',
        'FreezeColor', 'GainReductionLineColor', 'GridLabel', 'IconBlendFactor',
        'ImplicitArm', 'InputCurveColor', 'InputCurveOutlineColor', 'KeyZoneBackground',
        'KeyZoneCrossfadeRamp', 'LearnKey', 'LearnMacro', 'LearnMidi', 'LoopColor',
        'MeterBackground', 'MidiNoteMaxVelocity', 'MinVelocityNoteBlendFactor',
        'MixSurfaceAreaBlendFactor', 'NoteBorderStandbyBlendFactor', 'NoteDisabledSelectedBlendFactor',
        'Operator1', 'Operator2', 'Operator3', 'Operator4', 'OutputCurveColor',
        'OutputCurveOutlineColor', 'Poti', 'PotiNeedle', 'PreferencesTab', 'Progress',
        'ProgressText', 'RangeDefault', 'RangeDisabled', 'RangeDisabledOff', 'RangeEditField2',
        'RangeEditField', 'RetroDisplayBackground', 'RetroDisplayBackgroundLine',
        'RetroDisplayBlendFactor', 'RetroDisplayForeground2', 'RetroDisplayForeground',
        'RetroDisplayForegroundDisabled', 'RetroDisplayGreen', 'RetroDisplayHandle1',
        'RetroDisplayHandle2', 'RetroDisplayRed', 'RetroDisplayScaleText', 'ScrollbarInnerHandle',
        'ScrollbarInnerTrack', 'ScrollbarLCDHandle', 'ScrollbarLCDTrack', 'ScrollbarOuterHandle',
        'ScrollbarOuterTrack', 'SearchIndication', 'SearchIndicationStandby', 'SelectionBackground',
        'SelectionForeground', 'SelectionFrame', 'SelectorZoneBackground', 'SelectorZoneCrossfadeRamp',
        'ShadowDark', 'ShadowLight', 'SpectrumAlternativeColor', 'SpectrumDefaultColor',
        'StandbySelectionBackground', 'StandbySelectionForeground', 'StripedBackgroundShadeFactor',
        'SurfaceArea', 'SurfaceAreaFocus', 'SurfaceBackground', 'SurfaceHighlight',
        'TextDisabled', 'TextFrameSegmentBlendFactor', 'ThresholdLineColor', 'TransportOffBackground',
        'TransportOffDisabledForeground', 'TransportProgress', 'TransportSelectionBackground',
        'TreeColumnHeadBackground', 'TreeColumnHeadControl', 'TreeColumnHeadFocus',
        'TreeColumnHeadForeground', 'TreeColumnHeadSelected', 'TreeRowCategoryBackground',
        'TreeRowCategoryForeground', 'VelocityColor', 'VelocityEditorForegroundSelectedBlendFactor',
        'VelocityZoneBackground', 'VelocityZoneCrossfadeRamp', 'ViewCheckControlDisabledOff',
        'ViewCheckControlDisabledOn', 'ViewCheckControlEnabledOff', 'ViewCheckControlEnabledOn',
        'WarperTimeBarMarkerBackground', 'WarperTimeBarRulerBackground', 'WaveformColor'
    ],

    init: function() {
        this.createTooltips();
        this.addHoverEffects();
        this.createMappingPanel();
    },

    createTooltips: function() {
        // Add tooltips to elements that have XML mappings
        Object.keys(this.mappings).forEach(selector => {
            const elements = document.querySelectorAll(selector);
            const xmlProperty = this.mappings[selector];
            
            elements.forEach(element => {
                element.setAttribute('data-xml-property', xmlProperty);
                element.setAttribute('title', `XML Property: ${xmlProperty}`);
                element.classList.add('xml-mapped-element');
            });
        });
    },

    addHoverEffects: function() {
        // Add visual feedback when hovering over mapped elements
        const style = document.createElement('style');
        style.textContent = `
            .xml-mapped-element {
                position: relative;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .xml-mapped-element:hover {
                outline: 2px solid #ff6b35;
                outline-offset: 2px;
                z-index: 1000;
            }
            
            .xml-mapped-element:hover::after {
                content: attr(data-xml-property);
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1001;
                pointer-events: none;
                margin-bottom: 5px;
            }
            
            .xml-mapped-element:hover::before {
                content: '';
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                border: 5px solid transparent;
                border-top-color: rgba(0, 0, 0, 0.9);
                z-index: 1001;
                pointer-events: none;
            }
            
            #xml-mapping-panel {
                position: fixed;
                top: 10px;
                right: 10px;
                width: 300px;
                max-height: 400px;
                background: white;
                border: 2px solid #333;
                border-radius: 8px;
                padding: 15px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                overflow-y: auto;
                z-index: 2000;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }
            
            #xml-mapping-panel h3 {
                margin: 0 0 15px 0;
                color: #333;
                font-size: 16px;
            }
            
            .mapping-item {
                margin-bottom: 8px;
                padding: 5px;
                background: #f5f5f5;
                border-radius: 4px;
                border-left: 4px solid #ff6b35;
            }
            
            .mapping-selector {
                font-weight: bold;
                color: #333;
            }
            
            .mapping-property {
                color: #666;
                font-style: italic;
            }
            
            .toggle-button {
                position: fixed;
                top: 10px;
                right: 320px;
                background: #ff6b35;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
                z-index: 2001;
                font-weight: bold;
            }
            
            .toggle-button:hover {
                background: #e55a2b;
            }
        `;
        document.head.appendChild(style);
    },

    createMappingPanel: function() {
        // Create a panel showing all mappings
        const panel = document.createElement('div');
        panel.id = 'xml-mapping-panel';
        panel.innerHTML = `
            <h3>XML Property Mappings</h3>
            <div id="mapping-list"></div>
        `;
        
        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-button';
        toggleButton.textContent = 'Toggle Mappings';
        toggleButton.onclick = () => {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        };
        
        document.body.appendChild(panel);
        document.body.appendChild(toggleButton);
        
        this.updateMappingPanel();
    },

    updateMappingPanel: function() {
        const listContainer = document.getElementById('mapping-list');
        let html = '';
        
        Object.entries(this.mappings).forEach(([selector, property]) => {
            html += `
                <div class="mapping-item">
                    <div class="mapping-selector">${selector}</div>
                    <div class="mapping-property">→ ${property}</div>
                </div>
            `;
        });
        
        listContainer.innerHTML = html;
    },

    highlightElement: function(selector) {
        // Remove previous highlights
        document.querySelectorAll('.highlighted-element').forEach(el => {
            el.classList.remove('highlighted-element');
        });
        
        // Add highlight to selected element
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('highlighted-element');
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
};