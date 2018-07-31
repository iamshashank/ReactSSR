import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 400,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class UserGrid extends React.Component {
  constructor(props){
    super(props);
  }
  renderList(users,classes){
      return users.map((user)=>{
        return  (<Grid key={user.id} item xs={4}>
                 <Card className={classes.card}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="Name" className={classes.avatar}>
                               {user.name[0]}
                              </Avatar>
                            }
                            title={user.name}
                            subheader={(new Date()).toString()}
                          />
                  </Card>
                </Grid>);
      });
  }
  render(){
    const { classes,users } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
         {this.renderList(users,classes)}
        </Grid>
      </div>
      );
  }
}

UserGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserGrid);
