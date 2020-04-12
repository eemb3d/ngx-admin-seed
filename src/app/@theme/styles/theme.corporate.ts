import { NbJSThemeOptions, CORPORATE_THEME as baseTheme } from '@nebular/theme';

const baseThemeVariables = baseTheme.variables;

export const CORPORATE_THEME = {
  name: 'corporate',
  base: 'corporate',
  variables: {
    temperature: {
      arcFill: [ '#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0' ],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: baseThemeVariables.bg2,
      thumbBorder: '#ffa36b',
    },

    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',

      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,

      itemBorderColor: baseThemeVariables.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: baseThemeVariables.primary,
      lineGradTo: baseThemeVariables.primary,
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(0, 0, 0, 0)',
      areaGradTo: 'rgba(0, 0, 0, 0)',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },
  },
} as NbJSThemeOptions;
