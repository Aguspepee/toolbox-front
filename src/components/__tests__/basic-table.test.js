import { render as rtlRender, screen, cleanup } from '@testing-library/react';
import BasicTable from '../basic-table';
import { Provider } from 'react-redux';
import store from '../../store/store';

const render = component => {
    rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)}

afterEach(() => {
    cleanup()
})

//Some basic tests
test('Should render basic-table with no files', () => {
    render(<BasicTable />);
    const basicTableElement = screen.getByTestId('basic-table-1');
    expect(basicTableElement).toBeInTheDocument();
    expect(basicTableElement).toHaveTextContent('File Name');
    expect(basicTableElement).toHaveTextContent('Text');
    expect(basicTableElement).toHaveTextContent('Number');
    expect(basicTableElement).toHaveTextContent('Hex');
})
