import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UsersInViewType } from "../utils/listUsersInView";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

interface VisibleUsersTableProps {
  usersList: UsersInViewType;
}

export default function VisibleUsersTable({
  usersList,
}: VisibleUsersTableProps) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Distance (px)</TableCell>
            <TableCell align="center">Broadcasting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user) => (
            <TableRow
              key={user.username}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell>{user.distance}</TableCell>

              <TableCell align="center">
                {user.is_broadcaster ? (
                  <PodcastsIcon style={{color: 'green'}} />
                ) : (
                  <DoNotDisturbAltIcon />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
