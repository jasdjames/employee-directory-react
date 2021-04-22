import { TableBody } from './TableBody';

export const Table = () => {
  return (
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
};
