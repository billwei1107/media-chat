import React from 'react';
import { ConfigProvider } from 'antd';
import { designTokens } from './designTokens';

export const AppTheme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: designTokens.colors.primary, // #84cc16
          borderRadius: 12, // Match designTokens.borderRadius.base
          fontFamily: designTokens.typography.fontFamily,
          colorLink: designTokens.colors.secondary,
          colorSuccess: designTokens.colors.success,
          colorWarning: designTokens.colors.warning,
          colorError: designTokens.colors.error,
          // Update derived colors if needed
        },
        components: {
          Button: {
            borderRadius: 12,
            controlHeightLG: 48,
          },
          Card: {
            borderRadiusLG: 12,
          },
          Layout: {
            colorBgBody: designTokens.colors.background,
            colorBgHeader: designTokens.colors.surface,
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};
