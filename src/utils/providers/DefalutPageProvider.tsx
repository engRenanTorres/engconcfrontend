import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import GeneralProvider from './GeneralProvider';
import { useMediaQuery } from '@mui/material';
import SidebarMobile from '../../components/SidebarMobile';

interface PageProviderProps {
  children: ReactNode;
}
const DefaultPageProvider = ({ children }: PageProviderProps) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  return (
    <GeneralProvider>
      <div className="App">
        <GlobalStyles />
        <Container>
          <Sidebar />
          <div className="content">
            <Topbar />
            {children}
          </div>
        </Container>
      </div>
    </GeneralProvider>
  );
};
export default DefaultPageProvider;

export const Container = styled.div`
  display: flex;
  .content {
    height: 100%;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    background: ${({ theme }) => theme.palette.background.default};
  }
`;
