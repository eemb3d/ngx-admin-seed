import { NbJSThemeOptions, DEFAULT_THEME as baseTheme } from '@nebular/theme';

const baseThemeVariables = baseTheme.variables;

export const DEFAULT_THEME = {
  name: 'default',
  base: 'default',
  variables: {
    temperature: {
      arcFill: [
        baseThemeVariables.primary,
        baseThemeVariables.primary,
        baseThemeVariables.primary,
        baseThemeVariables.primary,
        baseThemeVariables.primary,
      ],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: baseThemeVariables.bg2,
      thumbBorder: baseThemeVariables.primary,
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

      areaGradFrom: baseThemeVariables.bg2,
      areaGradTo: baseThemeVariables.bg2,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },
  },
} as NbJSThemeOptions;
