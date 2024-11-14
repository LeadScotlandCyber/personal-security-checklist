import { component$ } from '@builder.io/qwik';

export const Analytics = component$(() => {
return (
<>
<script
async
src="https://www.googletagmanager.com/gtag/js?id=G-D2MW5NBL5Z"
></script>
<script
dangerouslySetInnerHTML={`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-RESG6W84LQ');`}
/>
</>
);
});