import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../App';

describe('<App/> tests', () => {
    test('Snapshot test', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const wrapper = shallow(<App />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
