export const TableBody = ({ images, names, phones, emails, dobs }) => (
  <tr>
    <th scope="row"> {images.picture.thumbnail}</th>
    <td>{names.results.name}</td>
    <td>{phones.phone}</td>
    <td>{emails.email}</td>
    <td>{dobs.dob}</td>
  </tr>
);
