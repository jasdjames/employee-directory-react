export const TableBody = ({ images, names, phones, emails, dobs }) => (
  <tr>
    <th scope="row"> {images.results.picture.thumbnail}</th>
    <td>{names.results.name}</td>
    <td>{phones.results.phone}</td>
    <td>{emails.results.email}</td>
    <td>{dobs.results.dob}</td>
  </tr>
);
