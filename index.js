/* React-TimeFrom */
import React from 'react'
import PropTypes from 'prop-types';

export default class Since extends React.Component {
  static displayName = 'Since'
  static defaultProps = {
    live: true,
  }

  timeoutId
  isMtd: false

  tick = () => {
    // don't do anything if not mounted or not live
    if (!this.isMtd || !this.props.live) {
      return
    }

    // update every 1 minute
    this.timeoutId = setTimeout(this.tick, 1000 * 60)

    // re-render
    this.forceUpdate()
  }

  componentDidMount () {
    this.isMtd = true
    if(this.props.live) {
      this.tick()
    }
  }

  componentWillUnmount () {
    this.isMtd = false
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
      this.timeoutId = undefined
    }
  }

  // the logic - needs cleaning up
  getSince(seconds) {
    const minutes = Math.round(seconds / 60)
    if(minutes < 5) {
      return "just now"
    }

    // round to nearest 5 minutes
    if(minutes < 45) {
      return (Math.round(minutes / 5) * 5) + " minutes ago"
    }

    if(minutes < 90) {
      return "an hour ago"
    }

    const hours = Math.round(minutes / 60)
    if(hours < 5) {
      return "a few hours ago"
    }

    if(hours < 12) {
      return hours + " hours ago"
    }

    const days = Math.round(hours / 24)
    if(days === 1) {
      return "yesterday"
    }

    if(days < 7) {
      return days + " days ago"
    }

    const weeks = Math.round(days / 7)
    if(weeks === 1) {
      return "a week ago"
    }
    if(weeks < 4) {
      return weeks + " weeks ago"
    }

    const months = Math.round(weeks / 4)
    if(months === 1) {
      return "a month ago"
    }
    if(months < 12) {
      return months + " months ago"
    }

    const years = Math.round(months / 12)
    if(years == 1) {
      return "a year ago"
    }

    return years + " years ago"
  }

  render() {
    const { date } = this.props

    // convert date to milliseconds
    const then = Date.parse(date)
    if (!then) {
      return null
    }
    const now = Date.now()

    // get difference in seconds between two dates
    const seconds = Math.round(Math.abs(now - then) / 1000)
    const since = this.getSince(seconds)

    return (
      <span>{since}</span>
    )
  }
}

Since.propTypes = {
  live: PropTypes.bool,
  date: PropTypes.string,
}
