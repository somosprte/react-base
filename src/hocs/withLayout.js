import Layouts from 'layouts';

export default function withLayout(name = 'Default') {
  return Layouts[name];
}
