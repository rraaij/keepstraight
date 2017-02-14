import 'reflect-metadata';
import {SetupControls} from './gamesetup.component';

describe('the GameSetup Component', () => {
  it('should render correctly', () => {
    const component = new SetupControls();
    expect(component).toBeDefined();
  });
});
