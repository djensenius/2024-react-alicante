# Welcome to the workkshop! 

In this workshop, we will dive into the world of code accessibility by leveraging Copilot, GitHub's AI coding assistant. Led by David Jensenius and [Alena Nikolaeva](https://x.com/alenanik11) from GitHub Copilot team, participants will gain practical insights into maximizing code accessibility while building React components.

## Introduction

### Definition

At the most basic level, accessibility ensures that everyone, regardless of ability, education level and software they use can access your website or application.
The definition is more nuanced than that, though. The Web is fundamentally designed to work for all people. However, poorly designed and inaccessible applications lead to broad-scale exclusion.

### Who defines web accessibility?

World Wide Web Consortium (W3C) - [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG)

It’s important to note that the WCAG standards themselves are guidelines, not law. The W3C itself evaluates organisations based on these standards but doesn’t have the authority to enforce them. The Web Content Accessibility Guidelines (WCAG) 2.1 is a comprehensive standard for web accessibility. It is also currently the basis for legislation on web accessibility in many parts of the world. 

To keep the commitment active, and most importantly, to translate it into action, all team members need to know how they should contribute in [their own specific role](https://www.w3.org/community/wai-engage/wiki/Accessibility_Responsibility_Breakdown).

### For who?

There is a wide range of disabilities, but accessibility aims to make sure that people can use the web no matter their abilities. It is important to consider and design for different types of use cases, some of them include:

- Usage without vision
- Usage with limited vision
- Usage without perception of colour
- Usage without hearing
- Usage with limited hearing
- Usage without the vocal capability
- Usage without manipulation or strength
- Usage with limited reach
- Minimise photosensitive seizure triggers
- Usage with limited cognition

## Workbook - step by step 

### 1. Resources and tools

- [ ] Install Chrome extensions like [Wave](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), [HeadingsMap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) and [Axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd) 
Optional extensions and tools:
- [ ] [Accessibility checker](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp)
- [ ] [VisBug extension](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=en) 
- [ ] [taba11y extension](https://chromewebstore.google.com/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga?pli=1)
- [ ] Participants should bring their laptops with access to [GitHub](https://github.com/) (each participant will get an invitation to an organization or a coupon for complimentary Copilot access).
- [ ] Basic accessibility knowledge (not mandatory). 
- [ ] [VS Code](https://code.visualstudio.com/download)
- [ ] Basic knowledge of [React](https://react.dev/)
- [ ] Learn a little bit about [Storybook](https://storybook.js.org/), we will use it. 
- [ ] If you’re interested in automated tests, you can even [integrate axe with Cypress](https://github.com/component-driven/cypress-axe)
- [ ] Have foundational prompt that will turn Copilot Chat into accessibility assistant handy:
- [ ] Will will use [this tool to fix color contrast](https://colourcontrast.cc/?background=ffffff&foreground=33a1cc), so have it handy!

```
I need to learn about accessibility and need to write code that conforms with the WCAG 2.1 level A and AA
success criteria defined at https://www.w3.org/TR/WCAG21/. I want you to be my accessibility coach, a
subject-matter expert that makes me think and account for all accessibility requirements and usability
enhancements. When you answer questions about accessibility please use reputable sources such as w3.org,
webaim.org, developer.mozilla.org, and https://www.ibm.com/able/. When possible, please provide links and
references for additional learning. When you suggest code please use semantic HTML, ensure it is operable
using the keyboard, follow WCAG 2.1 sufficient techniques, and follow the ARIA Authoring Practices Guide
and related design patterns. Do you understand these instructions?
```

### 2. Setup

1. Redeem the Copilot code, or feel free to give away your copy after the workshop to someone who would use it
2. Go to [https://gh.io/ra](https://gh.io/ra)
2. Click on the code button
3. Select the Codespaces tab
4. Click `Create codespace on main`
5. Visual Studio Code should start up with all packages installed
6. Select the build and run tab in Visual Studio Code
7. Run either "Debug React Code in Chrome" or "Debug React Code in Firefox"

### 3. Determine the status of the page

1. Open the website
2. Check how bad the situation is (easy [automatic checker](https://www.webaccessibility.com/)), [Wave](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) or [Axe](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
4. Open [Web developer extension](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=es) 
5. Disable all styles
  - [ ] Does the website work without CSS (in case it doesn’t load)?
  - [ ] Does the order of elements of your page make sense?
  - [ ] Are images and icons sized correctly?
  - [ ] Is your document well structured?
5. Rendering (blurred vision, contrast) use Chrome Dev Tools. A perfect example are links, they should have underlines to easily differentiate them from normal text.
P.S. prefers-reduced-motion for animations, zooming, and panning can be problematic for people who have vestibular disorders
6. Use the keyboard
`tab` key ➡️
Put your mouse away and tab through the page and see if you can use every single part of the site without a mouse/touch pad.
   - [ ] Are focus styles clearly visible?
   - [ ] Can you navigate between headings?
   - [ ] Is everything focusable that should be?
   - [ ] Are your buttons real <button>s?
   - [ ] Is the overall UX using a keyboard great?
   - [ ] Are you managing focus correctly?
   - [ ] Do you hide and show elements correctly?
   - [ ] Does visual order match DOM order?
   - [ ] Turn on Wave and check ARIA labels and others → Wave and → Axe 
   - [ ] Zoom in out 200% to check how/if text is scaling correctly.
8. Check headings with HeadingsMap
9. Check images descriptions with [Web developer extension](https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=es) 
10. Color contrast of elements with [VisBug](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=en)

### 3. Digging deeper

#### Generic

When it comes to the underlying HTML code, we’re in luck: it has already been designed, from the outset, to be inclusive. HTML is a toolkit for inclusion. Using the right elements for the job doesn’t just mean the few who use screen readers benefit, but keyboard accessibility comes out-of-the-box.

This guide uses [The Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) as a reference point. The WCAG is a shared standard for web content accessibility for individuals, organizations, and governments.

The reccomendations targets many, but not all level A and AA concerns and prompts you to check for covers a wide range of disability conditions. Each recommendation contains a link to the WCAG section.

- [ ]  Ensure that viewport zoom is not disabled ([resize text](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html))
- [ ]  Ensure a linear content flow ([focus order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html))
<details>
<summary>Hint</summary>
    
    Remove `tabindex` attribute values that aren't either `0` or `-1`. Elements that are inherently focusable, such as links or `button` elements, do not require a `tabindex`. Elements that are not inherently focusable should not have a `tabindex` applied to them outside of very specific use cases.
  
</details>

- [ ] Avoid using the autofocus attribute ([focus order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html))

<details>
<summary>Hint</summary>
    People who are blind or who have low vision may be disoriented when focus is moved without their permission. Additionally, `autofocus` can be problematic for people with motor control disabilities, as it may create extra work for them to navigate out from the autofocused area and to other locations on the page/view.
</details>

- [ ] Be mindfull about session timeouts ([timing adjustable](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html))
<details>
<summary>Hint</summary>
  If you cannot, let the person using your site know the timeout exists ahead of time, and provide significant notice before the timer runs out.
</details>

- [ ] Remove `title` attribute tooltips ([name, role, value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html))

<details>
<summary>Hint</summary>
    The `title` attribute has numerous issues, and should not be used if the information provided is important for all people to access. Acceptable use for the `title` attribute would be labeling an `iframe` element to indicate what content it contains.
</details>

#### Keyboard

It is important that your interface and content can be operated, and navigated by use of a keyboard. Some people cannot use a mouse or may be using other assistive technologies that may not allow for hovering or precise clicking.

- [ ] Make sure there is a visible focus style for interactive elements that are navigated to via keyboard input ([focus visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html))

- [ ] Check to see that keyboard focus order matches the visual layout ([meaningful sequence](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html))
<details>
<summary>Hint</summary>
Can a person navigating with a keyboard or screen reader move around the page in a predictable way?
</details>

- [ ] Remove invisible focusable elements ([focus order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html))
<details>
<summary>Hint</summary>
    Remove the ability to focus on elements that are not presently meant to be discoverable. This includes things like inactive drop-down menus, off-screen navigations, or modals.
</details>

#### Images

- [ ] Make sure that all `img` elements have an `alt` attribute ([non-text content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html))

<details>
<summary>Hint</summary>
  `alt` attributes (alternative text) give a description of an image for people who may not be able to view it. When an `alt` attribute isn't present on an image, a screen reader may announce the image's file name and path instead. This fails to communicate the image’s content.
</details>    

- [ ] Make sure that decorative images use **null** `alt` (empty) attribute values.

<details>
<summary>Hint</summary>
    Null alt attributes are also sometimes known as empty alt attributes. They are made by including no information between the opening and closing quotes of an alt attribute. Decorative images do not communicate information that is required to understand the website's overall meaning. 
</details>    

- [ ] Provide a text alternative for complex images such as charts, graphs, and maps ([non-text content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html))

<details>
<summary>Hint</summary>
    Is there a plain text which lists points on the map or sections of a flowchart? Describe all visible information. This includes graph axes, data points and labels, and the overall point the graphic is communicating
</details>   
    
####  Headings

Heading elements (`h1`, `h2`, `h3`, etc.) help break up the content of the page into related “chunks” of information. They are incredibly important for helping people who use assistive technology to understand the meaning of a page or view.

- [ ] Use heading elements to introduce content ([heading or labels](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html))

<details>
<summary>Hint</summary>
  Heading elements construct a document outline, and should not be used for purely visual design.
</details>       

- [ ] Try to use only one `h1` element per page or view ([heading or labels](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html))

<details>
<summary>Hint</summary>
  The `h1` element should be used to communicate the high-level purpose of the page or view.
</details>        

- [ ] Heading elements should be written in a logical sequence

<details>
<summary>Hint</summary>
  The order of heading elements should descend, based on the “depth” of the content. For example, `h4` element should not appear on a page before the first `h3` element declaration. A tool such as [headingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en) can help you evaluate this.
</details> 

#### Controls and links

Controls are interactive elements such as links and buttons that let a person navigate to a destination or perform an action.

- [ ] Links should always have a `href` attribute ([info and relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html))

<details>
<summary>Hint</summary>
  Without a `href` attribute, the link will not be properly exposed to assistive technology. An example of this would be a link that uses an `onClick` event, in place of a href attribute.
</details> 

- [ ] Ensure that links are recognizable as links ([use of color](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html))

<details>
<summary>Hint</summary>
  Color alone is not sufficient to indicate the presence of a link. Underlines are a popular and commonly-understood way to communicate the presence of link content.
</details> 

- [ ] Ensure that controls have `:focus` states ([focus visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html))

<details>
<summary>Hint</summary>
Visible focus styles help people determine which interactive element has keyboard focus. This lets them know that they can perform actions like activating a button or navigating to a link's destination.
</details> 
    
- [ ] Use the `button` element for buttons ([info and relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html))

<details>
<summary>Hint</summary>
    Buttons are used to submit data or perform an on-screen action that does not shift keyboard focus. You can add `type="button"` to a button element to prevent the browser from attempting to submit form information when activated.
</details> 
    
- [ ] Provide a skip link and make sure that it is visible when focused ([bypass blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html))

<details>
<summary>Hint</summary>
```html
    <a href="#main">Skip to main content</a>
      <nav role="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
      <main id="main">
        <!-- page specific content -->
      </main>
```
    A skip link can be used to provide quick access to the main content of a page or view. This allows a person to easily bypass globally repeated content such as a website's primary navigation, or persistent search widget.
</details> 
    
- [ ] Identify links that open in a new tab or window ([giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html))

<details>
<summary>Hint</summary>
     Ideally, avoid links that open in a new tab or window. If a link does, ensure the link's behavior will be communicated in a way that is apparent to all users. Doing this will help people understand what will happen before activating the link. While this technique is technically not required for compliance, it is an often-cited area of frustration for many different kinds of assistive technology users.
</details> 
  
#### Forms

Forms allow people to enter information into a site for processing and manipulation.

- [ ]  All inputs in a form are associated with a corresponding `label` element ([on input understanding](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html))

<details>
<summary>Hint</summary>
     Use a `for`/`id` pairing to guarantee the highest level of browser/assistive technology support.
</details> 
    
- [ ]  Use fieldset and legend elements where appropriate ([info and relationships](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html))

<details>
<summary>Hint</summary>
     Does your form contain multiple sections of related inputs? Use `fieldset` to group them, and `legend` to provide a label for what this section is for.
</details>     

- [ ]  Inputs use `autocomplete` where appropriate ([identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html))

<details>
<summary>Hint</summary>
   [Providing a mechanism](https://www.w3.org/TR/html52/sec-forms.html#sec-autofill) to help people more quickly, easily, and accurately fill in form fields that ask for common information (for example, name, address, phone number)
</details>  
    
- [ ]  Make sure that form input errors are displayed in the list above the form after submission ([error identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html))

<details>
<summary>Hint</summary>
    This provides a way for assistive technology users to quickly have a high-level understanding of what issues are present in the form. This is especially important for larger forms with many inputs. Make sure that each reported error also has a link to the corresponding field with invalid input.
</details>  
    
- [ ]  Associate input error messaging with the input it corresponds to ([error identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html))

<details>
<summary>Hint</summary>
Techniques such as [using aria-describedby](https://developer.paciellogroup.com/blog/2018/09/describing-aria-describedby/) allow people who use assistive technology to more easily understand the difference between the input and the error message associated with it.
</details>  
  
  
#### Media

Media includes content such as pre-recorded and live audio and video.

- [ ] Make sure that media does not autoplay ([audio control](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html))

<details>
<summary>Hint</summary>
Unexpected video and audio can be distracting and disruptive, especially for certain kinds of cognitive disability such as ADHD.
</details>  
    
- [ ] Check to see that all media can be paused ([keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html))

<details>
<summary>Hint</summary>
    Provide a global pause function on any media element. If the device has a keyboard, ensure that pressing the `Space key` can pause playback. Make sure you also don't interfere with the `Space key`'s ability to scroll the page/view when not focusing on a form control.
</details>      

#### Animation

Content that moves, either on its own, or when triggered by a person activating a control

- [ ] Ensure animations are subtle and do not flash too much ([three flashes or below threshold](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html))

<details>
<summary>Hint</summary>
    Certain kinds of strobing or flashing animations will trigger seizures. Others may be distracting and disruptive, especially for certain kinds of cognitive disability such as ADHD.
</details>      

- [ ] Provide a mechanism to pause background video ([pause, stop, hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html))

<details>
<summary>Hint</summary>
       Background video can be distracting, especially if the content is placed over it.
</details>     
    
- [ ] Make sure all animation obeys the `prefers-reduced-motion` media query ([animation from interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html))
- [ ] Provide a mechanism to pause background video ([pause, stop, hide](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html))

<details>
<summary>Hint</summary>
    Remove animations when the “reduce motion” setting is activated. If animation is necessary to communicate meaning for a concept, slow its duration down.
</details>  

#### Color contrast

Color contrast is how legible colors are when placed next to, and on top of each other

- [ ]  Level AA compliance requires a contrast ratio of 4.5:1 for normal-sized text, icons, borders for inputs, radio buttons, checkboxes, etc ([contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html))
- [ ]  Check custom `::selection` colors

<details>
<summary>Hint</summary>
        Is the color contrast you set in [your `::selection` CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) declaration sufficient? Otherwise, someone may not be able to read it if they highlight it.
</details>  
    
#### Mobile / Touch

- [ ] Check that the site can be rotated to any orientation ([orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html))
- [ ] Remove horizontal scrolling ([reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))

<details>
<summary>Hint</summary>
       Requiring someone to scroll horizontally can be difficult for some, irritating for all
</details>  

- [ ] Ensure that button and link icons can be activated with ease ([target size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html))

<details>
<summary>Hint</summary>
        It's good to make sure things like hamburger menus, social icons, gallery viewers, and other touch controls are usable by a wide range of hand and stylus sizes.
</details> 
   
- [ ] Ensure sufficient space between interactive items in order to provide a scroll area ([Bypass blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html))

<details>
<summary>Hint</summary>
        Some people who experience motor control issues such as hand tremors may have a very difficult time scrolling past interactive items that feature zero spacing.
</details> 

## Good news

Accessibility can never be perfect, but by thinking inclusively from planning, through prototyping to coding, you can reduce the time you spend on coding to minutes. It's never been easier before. [This guide is awesome if you want to continue learning](https://www.accessibility-developer-guide.com/introduction/), or [you can ask Copilot](https://github.blog/developer-skills/github/prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/) to be your personal a11y assistant.

And remember:

![CleanShot 2024-08-19 at 10 56 58@2x](https://github.com/user-attachments/assets/4f1419f3-2012-4d50-bd1d-587628bf4778)


