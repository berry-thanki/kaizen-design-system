---
title: Animation
navTitle: Animation
---

<!-- ---
imports:
  InlineNotification: cultureamp-style-guide/components/Notification/InlineNotification.js
  IntroParagraph: components/IntroParagraph.js
  AnimationSequencesExample: ./examples/AnimationSequencesExample.js
  AnimationUsageInputExample: ./examples/AnimationUsageInputExample.js
  AnimationUsageOutputExample: ./examples/AnimationUsageOutputExample.js
  AnimationPresetsExample: ./examples/AnimationPresetsExample.js
  AnimationImportExample: ./examples/AnimationImportExample.js
  DurationPresetsExample: ./examples/DurationPresetsExample.js
  EasingPresetsExample: ./examples/EasingPresetsExample.js
  TransitionPresetsExample: ./examples/TransitionPresetsExample.js
  TransitionUsageInputExample: ./examples/TransitionUsageInputExample.js
  TransitionUsageOutputExample: ./examples/TransitionUsageOutputExample.js
--- -->

# Animation Guide

<div class="introParagraph">

Welcome to the Culture Amp Animation “Getting Started” guide. We hope that the following information will provide you with adequate technical guidelines on how we do animation at Culture Amp. If you believe something is missing or could be improved, please feel free to [contribute](https://github.com/cultureamp/cultureamp-style-guide).

</div>

::: aside class-one class-two
# Header One

With container contents. 
::: 

## Overview

Animation is an integral part of the User Experience we are trying to create within our application. As the Culture Amp product/s mature and grow, we want animation to be an upfront consideration in everything we design and build. This goal brings with it some challenges that we will need to address collaboratively as designers and developers. This animation guide and companion library attempts to reduce the friction of the following challenges.

### Re-usability

**_Developer happiness._**
With the adoption of multiple front-end frameworks, there will be different approaches to doing things. Ideally we need to find a common ground that will enable us to drive the implementation of animations without too much re-work across frameworks.

### Consistency

**_It’s all about the user._**
It is important that we all speak the same language when it comes to animation – for example, agreeing on what kind of animation `pulse` refers to, as opposed to `pop`. Currently there many ways to implement animations with no clear set guidelines to follow. This leads to variations in timings, durations and effects, and an overall inconsistent user experience.

### Performance

**_Smooth as butter._**
This topic can be a little bit controversial and usually involves a comparison between CSS and JS animations. For the purpose of this document, all approaches can be done well and also not so well. We want to ensure the implementation of performant animations is as easy as possible.

To best address the above mentioned goals and challenges, Culture Amp have opted for a “CSS-first” approach to animations. The following guide will show you what tools we have available and how you can get started.

## Animation & Transition Presets

Here are examples of pre-defined CSS transitions and animations that are ready to use. All animations/transitions have accompanying mixins that allow you to define customized behavior in respect to _duration_, _delay_, and _direction_. It is important to make a distinction between animations and transitions as they need to be implemented differently. Although the end result can appear the same, the key difference is that animations are keyframe-driven and will play immediately if not controlled with CSS properties e.g. [`animation-play-state`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state). Transitions, on the other hand, will need to be “triggered”. This is usually activated by a class being added to the element or a user interaction e.g. `hover` (see below for details).

**Animations**

<iframe src="/AnimationPresetsExample" frameborder="0" width="100%" id="foo"></iframe>

<!--- <InlineNotification persistent={true} type="affirmative">**Tip:** If you are doing any kind of prototyping the animation presets are very useful. As they are keyframe-driven, they do not need to be “triggered” like transitions, and will play simply by adding the animation class to the element.</InlineNotification> --->

**Transitions**

<!--- <TransitionPresetsExample /> --->

## Getting Started

Culture Amp have a number of [Sass](https://sass-lang.com/) mixins and animation presets available from [Kaizen](https://github.com/cultureamp/cultureamp-style-guide) for you to use. To start using them, import the animation styles into your Sass file.

<!--- <InlineNotification persistent={true} type="informative">Culture Amp’s animation helpers have been heavily built up [Zurb’s Motion UI](https://github.com/zurb/motion-ui). In fact, most of the mixins are just aliased versions the motion-ui library. This will allow Culture Amp to expand upon and potentially remove this dependency without breaking our animation API.</InlineNotification> --->

<!--- <AnimationImportExample /> --->

### Variables

The Sass animation variables are designed to provide consistency across all Culture Amp animations.

**Easings**

Prefix: `$ca-timing`

<!--- <EasingPresetsExample /> --->

**Durations**

Prefix: `$ca-duration`

<!--- <DurationPresetsExample /> --->

### Mixins

#### Animations

To use any of the animation presets, simply define a class and include the mixin. All preset animation mixins are prefixed with `ca-animation-`.

##### Animation Presets

##### Example

##### SASS Input

<!--- <AnimationUsageInputExample /> --->

##### CSS Output
<!--- <AnimationUsageOutputExample /> --->


| Type       | Mixin                              |
| ---------- | ---------------------------------- |
| Fade       | `@include ca-animation-fade`       |
| Pop        | `@include ca-animation-pop`        |
| Pulsate    | `@include ca-animation-pulsate`    |
| Scale Fade | `@include ca-animation-scale-fade` |
| Slide Fade | `@include ca-animation-slide-fade` |

| Param                   | Description                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| `state` (`in` or `out`) | State to transition to. (Default: `in`)                                          |
| `duration` (Keyword)    | Length (speed) of the transition. (Default: `$ca-duration-slow`)                 |
| `delay` (Duration)      | Delay in seconds or milliseconds before the transition starts. (Default: `null`) |

#### Transitions

To use any of the transition presets, simply define a class and include the mixin. All preset transition mixins are prefixed with `ca-transition-`.

##### Transition Presets

<!--- <InlineNotification persistent={true} type="informative">**Note:** Transitions will need to be “triggered” by adding `.ca-enter-active` or `.ca-exit-active` classes.</InlineNotification> --->

##### SASS Input

<!--- <TransitionUsageInputExample /> --->

##### CSS Output

<!--- <TransitionUsageOutputExample /> --->

| Type       | Mixin                               |
| ---------- | ----------------------------------- |
| Fade       | `@include ca-transition-fade`       |
| Scale Fade | `@include ca-transition-scale-fade` |
| Slide Fade | `@include ca-transition-slide-fade` |

| Param                   | Description                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| `state` (`in` or `out`) | State to transition to. (Default: `in`)                                          |
| `duration` (Keyword)    | Length (speed) of the transition. (Default: `$ca-duration-slow`)                 |
| `delay` (Duration)      | Delay in seconds or milliseconds before the transition starts. (Default: `null`) |

### Sequencing Animations

Sequencing animations with CSS/Sass can be cumbersome. To reduce verbosity and complexity, we have a couple of mixins that will help orchestrate more complex animation sequences.

<!--- <AnimationSequencesExample /> --->

<!--- <InlineNotification persistent={true} type="informative">**Note:** This mixin will only work with animation keyframe functions e.g. `pop` and `pulsate`.</InlineNotification> --->

| Param      | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| `duration` | Length (speed) of the transition                                          |
| `delay`    | Delay in seconds or milliseconds before starting the next transition      |
| `function` | one or more animation keyframe functions e.g. `pulsate`, `pop`, `fade`... |

## Technical considerations

### Rendering performance

For fast 60&nbsp;frames-per-second animations, you can cheaply animate:

* Opacity
* Translate (move the position)
* Scale (pixel scaling)
* Rotate

<!--- <InlineNotification persistent={true} type="informative">**Note:** none of these affect the “box” the item takes up on the page. You can use `transform: scale` or `transform: translate`, but the content will still take up the same space on the page as if no `transform` had been applied.</InlineNotification> --->

For animating other properties, you might use `will-change` so the browser can set up appropriate optimizations ahead of time before the element is actually changed.

### Animate collapsing height

There are trade-offs to the different approaches to expand and collapse animations.

* `transform: scaleY()` - fast, but items below do not move up
* `transform: translateY()` - fast, but items below do not move up
* `height: 0` - the box shrinks height, so content inside is reflowed (can look awkward, or generate scrollbars, etc.)
* `margin-top:` - the box stays the same size, but shifts up and consumes less space, so items below shift up. (This can result in overlapping content above if you are not careful!) Useful if you want to “slide behind” another element or if you time it so the shift up happens in conjunction with a fade out such that it has mostly faded out by the time it would overlap with other content.

## FAQs

**Question:** Will this approach completely remove the need for JavaScript-based animations?

**Answer:** No.
**Better answer:** There will most likely still be a need for programmatically-driven animations. However, whenever possible, a CSS alternative solution should be favoured.

---

# Animation

<div class="introParagraph">

Meaningful motion helps make our product easy for everyone and tells our brand's story.

</div>

<InlineNotification persistent={true} type="affirmative">**Tip:** Looking for the technical animation guide? _Check out the [Animation Getting Started Guide](/guides/animation)_</InlineNotification>

[[toc]]

## Meaningful motion

We use animation purposefully to:

* Provide our customers, human resource leaders, with visual cues for direction and focus.
* Create a consistent experiential 'feel' across the product.
* Indicate interaction affordances.
* Achieve context shifting.
* Affect our audience's perception of time and indicate something is happening.
* To set a tone that matches our brand.
* Celebrate our customers' milestones.
* Give feedback, especially reassurances.
* Create an emotional, engaging experience with delight.

## Categories of animation

* Choreographed entrances and exits
* Stylized entrances and exits
* Loading and progress
* Show and hide
* Cause and effect
* Ambient information
* Demonstrations
* Interaction feedback

## Designing animations

### Animate once and one hundred times

Every microinteraction animation works well for the first time and the hundredth time.

* Test 100 animated instances shown at once.
* Test a single animation repeated 100 times.

### Aim for a fast time to first interaction

**Aim for a fast time to first interaction of 300ms** or less with primary content or data. Supplementary content may have a delay and arrive after the first 300ms.

### What is _too much_ animation?

#### 1. Use 1 primary call to action

If there are continually running animations on a page, the motion draws the user’s attention to the most important thing they need to be doing.

#### 2. Use more user-initiated animation than system-initiated

We are more adventurous with the amount and size of user-initiated animation than system-initiated. If people want to keep clicking a button because of its fun animations, go wild; for looping animations constantly running on a page, cut back! Note: consider player controls to pause, stop or hide animations. See also: [Pause, Stop, Hide: Understanding Success Criterion 2.2.2 from the Web Content Accessibility Guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html).

#### 3. Minimize browser jank for silky smooth rendering

To minimize browser jank (stuttering or choppiness), we test our animations to ensure they keep up at 60&nbsp;frames per second, including in old browsers and devices. If they cannot keep up, that might be a sign of too much animation.

### Stagger separate items and synchronize connected items

Separate, individual items that are meaningfully different from each other can move separately, with staggered entrances and exits. For example, navigation items that link to wildly different content can enter one after another.

Connected items move together as a single body. We synchronize movement of groups of closely related items.

### Placeholder loading skeletons predict content

Placeholder loading skeletons fill the space that its future content will occupy when it's loaded.

* Give people an idea of **what’s about to come** and what’s happening (it's currently loading).
* Be **subtle**, because it’s not a real, interactive interface.
* Be **flexible to an unknown number of items or shape of data** being loaded. This might be indicated either through composition to suggest the shape of what will arrive, or through repeatable elements.
* When content arrives, it does not move around sharply compared to the placeholder loading skeleton.
* We don’t currently use gradients in our branding aesthetic, so for ‘shimmering’ skeletons we opt for opacity changes rather than animated gradients.

### Choreographed entrances provide a red carpet experience

A **choreographed entrance** or orchestrated entrance introduces elements in a sequence, potentially with overlapping action. We “stage” the most important content.

A **stylized entrance** applies to a single element that may be standalone or part of a choreographed entrance.

Choreographed, stylized entrances focus attention through movement and reinforce our branding and design.

Choreographed entrances are reserved for “red carpet” or “grand unveiling” experiences, such as first use, onboarding, demos, showcasing new features, or landing pages rather than frequently visited pages.

_In contrast to a placeholder loading skeleton_, choreographed or stylized entrances don’t care how long content takes to load. For example, the whole page might be loaded already, but we only reveal each section with a fade as the person scrolls down the page. A single stylized entrance may mask and replace a short loading spinner.

<TipContainer>
<TipCard title="Try to…" type="tip">

* Aim for **fast time to first interaction** and consider if the stylized entrance _feels_ slower than instantly loading content.
* Use **consistent direction and movement** in relation to local environment to reinforce context and UI metaphors.
* For entrances, exits, and decorations, animation style is **so subtle that you can’t put your finger on it**.
* **Avoid bounces or overshoots**. We make exceptions when the bounce or overshoot is related to the animation effect or behavior itself, such as our emphasized growing "Take action" pill.

</TipCard>
<TipCard title="Avoid…" type="warning">

* **Content rules**. Draw attention to important content and data, not to interface controls.
* **Avoid keeping people from their content with time-consuming or showy entrances**.
* **Avoid contradicting movement that breaks UI metaphors**, such as an element entering with a fade and slide and exiting with a scale.
* **Avoid sharp, noticeable entrances** that draw attention away from the content to the animation itself.
* **Avoid excessively bouncy animations** that tarnish our trustworthy brand.

</TipCard>
</TipContainer>
