import React from 'react'
import { connect } from 'react-redux'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'

class Feed extends React.Component {
  componentDidMount() {
    var ref = this.firebase().ref("/v0/topstories").once('value').then(function(s) {
      console.log(s.val())
    })
    // ref.on("child_added", function(dataSnapshot) {
    //   console.log("child added")
    //   this.items.push(dataSnapshot.val());
    //   this.setState({
    //     items: this.items
    //   });
    // }.bind(this));
  }

  render() {
    return <div>Hacker news feed</div>
  }

  firebase() {
    return this.props.firebase.database()
  }
}

reactMixin(Feed.prototype, ReactFireMixin)

export default connect(
	state => ({
		feed: state.feed,
    firebase: state.firebase.connection,
	})
)(Feed)
