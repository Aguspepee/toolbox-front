import { render as rtlRender, screen, cleanup } from '@testing-library/react';
import BasicNavbar from '../basic-navbar';
import { Provider } from 'react-redux';
import store from '../../store/store';

const render = component => {
    rtlRender(
    <Provider store={store()}>
        {component}
    </Provider>
)}

afterEach(() => {
    cleanup()
})

//Some basic tests
test('Should render basic-navbar', () => {
    render(<BasicNavbar />);
    const basicNavbarElement = screen.getByTestId('basic-navbar-1');
    expect(basicNavbarElement).toBeInTheDocument();
})
