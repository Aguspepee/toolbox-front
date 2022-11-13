import { render, screen, cleanup } from '@testing-library/react';
import BasicTable from '../basic-table';

afterEach(() => {
    cleanup()
})

test('Should render basic-table with no files and no props', () => {

    render(<BasicTable />);
    const basicTableElement = screen.getByTestId('basic-table-1');
    expect(basicTableElement).toBeInTheDocument();
    expect(basicTableElement).toHaveTextContent('File Name');
    expect(basicTableElement).toHaveTextContent('Text');
    expect(basicTableElement).toHaveTextContent('Number');
    expect(basicTableElement).toHaveTextContent('Hex');
    expect(basicTableElement).toContainHTML('<th>');
    //If there are no files, the thable show this text
    expect(basicTableElement).toHaveTextContent('No lines to show');
})

test('Should render basic-table with an empty file', () => {
    const files = []
    render(<BasicTable files={files} />);
    const basicTableElement = screen.getByTestId('basic-table-1');
    expect(basicTableElement).toBeInTheDocument();
    expect(basicTableElement).toHaveTextContent('File Name');
    expect(basicTableElement).toHaveTextContent('Text');
    expect(basicTableElement).toHaveTextContent('Number');
    expect(basicTableElement).toHaveTextContent('Hex');
    expect(basicTableElement).toContainHTML('<th>');
    //If there are no files, the thable show this text
    expect(basicTableElement).toHaveTextContent('No lines to show');
})

test('Should render basic-table with just one file', () => {
    const files = [{
        file: 'test3.csv', lines: [
            { text: 'xlqrplNkjBGgbOuBfEFC', number: 55208574, hex: 'a772c66d393bb5c91a53d5ed4716b1fb' },
            { text: 'fEsvUXVMq', number: 60824561, hex: 'b071e5fbafee2ad35aebc2d143f173f6' },
            { text: 'YidfYoVpsDMVWaSbLsAaesw', number: 76, hex: '439a74895ffb7392a2cd6a1330ef1331' }]
    }]
    render(<BasicTable files={files} loading={false} />);
    const basicTableElement = screen.getByTestId('basic-table-1');
    expect(basicTableElement).toBeInTheDocument();
    expect(basicTableElement).toHaveTextContent('File Name');
    expect(basicTableElement).toHaveTextContent('Text');
    expect(basicTableElement).toHaveTextContent('Number');
    expect(basicTableElement).toHaveTextContent('Hex');
    expect(basicTableElement).toContainHTML('<th>');
    expect(basicTableElement).toHaveTextContent('xlqrplNkjBGgbOuBfEFC');
})

test('Should render basic-table with many files', () => {
    const files = [{
        file: 'test3.csv', lines: [
            { text: 'xlqrplNkjBGgbOuBfEFC', number: 55208574, hex: 'a772c66d393bb5c91a53d5ed4716b1fb' },
            { text: 'fEsvUXVMq', number: 60824561, hex: 'b071e5fbafee2ad35aebc2d143f173f6' },
            { text: 'YidfYoVpsDMVWaSbLsAaesw', number: 76, hex: '439a74895ffb7392a2cd6a1330ef1331' }]
    },
    {
        file: 'test4.csv', lines: [
            { text: 'xlqrplNkjBGgbOuBfEFC', number: 55208574, hex: 'a772c66d393bb5c91a53d5ed4716b1fb' },
            { text: 'fEsvUXVMq', number: 60824561, hex: 'b071e5fbafee2ad35aebc2d143f173f6' },
            { text: 'YidfYoVpsDMVWaSbLsAaesw', number: 76, hex: '439a74895ffb7392a2cd6a1330ef1331' }]
    }
    ]
    render(<BasicTable files={files} loading={false} />);
    const basicTableElement = screen.getByTestId('basic-table-1');
    expect(basicTableElement).toBeInTheDocument();
    expect(basicTableElement).toHaveTextContent('File Name');
    expect(basicTableElement).toHaveTextContent('Text');
    expect(basicTableElement).toHaveTextContent('Number');
    expect(basicTableElement).toHaveTextContent('Hex');
})

