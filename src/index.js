/*
 * React Since (MIT)
 * Tom Smith (https://github.com/tsmith123)
 */

import React from 'react'
import PropTypes from 'prop-types'

class Since extends React.Component {
  state = {
    timeoutId: null,
    since: null
  }

  tick = () => {
    console.log('TICK...')
    const { date, seconds } = this.props

    const timeoutId = setTimeout(this.tick, 1000 * seconds)

    const since = this.getSince(date)

    this.setState({ since, timeoutId })
  }

  componentDidMount () {
    const { live, date } = this.props

    // don't go any further if no date
    if (!date) return

    if (live) {
      this.tick()
    } else {
      const since = this.getSince(date)
      this.setState({ since })
    }
  }

  componentWillUnmount () {
    const { timeoutId } = this.state

    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }

  // the logic - needs cleaning up
  getSince = date => {
    // convert date to milliseconds
    const then = Date.parse(date)
    const now = Date.now()

    console.log(now)
    console.log(then)

    // get difference in seconds between two dates
    const seconds = Math.round(Math.abs(now - then) / 1000)

    const minutes = Math.round(seconds / 60)
    if (minutes < 5) {
      return 'just now'
    }

    // round to nearest 5 minutes
    if (minutes < 45) {
      return (Math.round(minutes / 5) * 5) + ' minutes ago'
    }

    if (minutes < 90) {
      return 'an hour ago'
    }

    const hours = Math.round(minutes / 60)
    if (hours < 5) {
      return 'a few hours ago'
    }

    if (hours < 12) {
      return hours + ' hours ago'
    }

    const days = Math.round(hours / 24)
    if (days === 1) {
      return 'yesterday'
    }

    if (days < 7) {
      return days + ' days ago'
    }

    const weeks = Math.round(days / 7)
    if (weeks === 1) {
      return 'a week ago'
    }
    if (weeks < 4) {
      return weeks + ' weeks ago'
    }

    const months = Math.round(weeks / 4)
    if (months === 1) {
      return 'a month ago'
    }
    if (months < 12) {
      return months + ' months ago'
    }

    const years = Math.round(months / 12)
    if (years === 1) {
      return 'a year ago'
    }

    return years + ' years ago'
  }

  render () {
    const { since } = this.state

    return <span>{since}</span>
  }
}

Since.propTypes = {
  live: PropTypes.bool,
  date: PropTypes.string,
  seconds: PropTypes.number
}

Since.defaultProps = {
  live: true,
  seconds: 60
}

export default Since
