# React-since
A tiny component for those needing "humanistic" outputs rather than "to-the-second" accuracy to display the amount of time passed. For example, instead of **item was added 37 seconds ago** this component would render **item was added just now**. See **Outputs** section below for further information.

## Install

    npm i -S react-since

## Use

    import Since from 'react-since'

## Date Prop (string)
The component requires a `date` prop and returns a `<span></span>` containing the approximate time since that date.

    const date = new Date().toString()
    <Since date={date} />

## Live Prop (Boolean)
The component by default is live meaning that dates will auto-update at set intervals. You can override this setting by passing a `live` prop like this:

    <Since date={'2019-05-24 10:30:00.000Z'} live={false} />

## Seconds Prop (Number)
The default refresh rate is 60 seconds but you can specify a different value by passing a seconds prop like this:

    <Since date={'2019-05-24 10:30:00.000Z'} live seconds={30} />

If the `live` prop is set to `false` then the `seconds` prop is ignored.

## Outputs
Outputs are designed to be humanistic. The thinking is that users typically want to know a rough idea of how long ago an event took place and aren't concerned with highly accurate timings. See the table below for example outputs.

| Time Difference  | Output             |
| ---------------- | ------------------ |
| 30 seconds       | "just now"         |
| 32 minutes       | "30 minutes ago"   |
| 70 minutes       | "an hour ago"      |
|  3 hours         | "a few hours ago"  |
