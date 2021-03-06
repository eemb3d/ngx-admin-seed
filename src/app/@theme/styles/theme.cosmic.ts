import { NbJSThemeOptions, COSMIC_THEME as baseTheme } from '@nebular/theme';

const baseThemeVariables = baseTheme.variables;

export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'cosmic',
  variables: {
    temperature: {
      arcFill: [ '#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59' ],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: '#ffffff',
      thumbBorder: '#ffffff',
    },

    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',

      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,

      itemBorderColor: baseThemeVariables.border2,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: baseThemeVariables.success,
      lineGradTo: baseThemeVariables.warning,
      lineShadow: baseThemeVariables.bg4,

      areaGradFrom: baseThemeVariables.bg2,
      areaGradTo: baseThemeVariables.bg3,
      shadowLineDarkBg: baseThemeVariables.bg3,
    },
  },
} as NbJSThemeOptions;
