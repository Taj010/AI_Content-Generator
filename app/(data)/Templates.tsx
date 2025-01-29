export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog title depends on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6463/6463648.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on given niche and outline topic and give me result in Rich editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter you blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content Generator',
        desc: 'Generate comprehensive blog content with proper structure and formatting',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        aiPrompt: 'Generate a well-structured blog post with the following sections: Introduction, Main Points (3-4 sections), and Conclusion. Use the title and keywords provided. Make it engaging and informative.',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Blog Title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Target Keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Additional Instructions',
                field: 'textarea',
                name: 'instructions'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'Get creative blog topic suggestions for your niche',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051653.png',
        aiPrompt: 'Generate 10 engaging and SEO-friendly blog topic ideas for the specified niche. Include potential headlines and brief descriptions.',
        slug: 'blog-topic-ideas',
        form: [
            {
                label: 'Blog Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Target Audience',
                field: 'input',
                name: 'audience'
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'Create engaging and SEO-optimized YouTube video titles',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate 5 catchy, SEO-optimized YouTube titles based on the topic and keywords provided. Include potential click-through rate predictions.',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Video Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Target Keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'Generate optimized YouTube video descriptions',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Create a detailed YouTube description with proper formatting, including timestamps, links, and calls to action. Optimize for SEO.',
        slug: 'youtube-description',
        form: [
            {
                label: 'Video Title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Key Points (for timestamps)',
                field: 'textarea',
                name: 'keyPoints',
                required: true
            },
            {
                label: 'Links to Include',
                field: 'textarea',
                name: 'links'
            }
        ]
    },
    {
        name: 'YouTube Tags',
        desc: 'Generate relevant tags for your YouTube videos',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate a list of relevant YouTube tags based on the video topic and keywords. Include both broad and specific tags.',
        slug: 'youtube-tags',
        form: [
            {
                label: 'Video Title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Video Description',
                field: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'Article Rewriter',
        desc: 'Rewrite articles while maintaining the original meaning',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921222.png',
        aiPrompt: 'Rewrite the provided article while maintaining its core message and improving clarity and engagement. Ensure originality.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Original Article',
                field: 'textarea',
                name: 'article',
                required: true
            },
            {
                label: 'Tone Preference',
                field: 'input',
                name: 'tone'
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Enhance your text for better clarity and engagement',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921222.png',
        aiPrompt: 'Improve the provided text by enhancing clarity, fixing grammar, and making it more engaging while maintaining the original message.',
        slug: 'text-improver',
        form: [
            {
                label: 'Original Text',
                field: 'textarea',
                name: 'text',
                required: true
            },
            {
                label: 'Improvement Focus',
                field: 'input',
                name: 'focus',
                required: true
            }
        ]
    },
    {
        name: 'Emoji Text Generator',
        desc: 'Add relevant emojis to your text',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3062/3062634.png',
        aiPrompt: 'Add appropriate emojis to the text while maintaining readability and preventing emoji overuse.',
        slug: 'add-emojis',
        form: [
            {
                label: 'Your Text',
                field: 'textarea',
                name: 'text',
                required: true
            },
            {
                label: 'Emoji Style (Fun/Professional)',
                field: 'input',
                name: 'style',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'Create engaging Instagram post content',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        aiPrompt: 'Generate engaging Instagram post content including caption, relevant emojis, and call-to-action.',
        slug: 'instagram-post',
        form: [
            {
                label: 'Post Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Brand Voice',
                field: 'input',
                name: 'voice',
                required: true
            },
            {
                label: 'Key Message',
                field: 'textarea',
                name: 'message'
            }
        ]
    },
    {
        name: 'Instagram Hashtag Generator',
        desc: 'Generate relevant hashtags for your Instagram posts',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        aiPrompt: 'Generate a mix of popular and niche-specific Instagram hashtags based on the post content and topic.',
        slug: 'instagram-hashtags',
        form: [
            {
                label: 'Post Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Grammar Checker',
        desc: 'Check and correct English grammar in your text',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1076/1076337.png',
        aiPrompt: 'Check the text for grammar, spelling, and punctuation errors. Provide corrections and explanations.',
        slug: 'grammar-check',
        form: [
            {
                label: 'Text to Check',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Code Writer',
        desc: 'Generate code based on your requirements',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        aiPrompt: 'Generate clean, well-documented code based on the requirements. Include comments and usage examples.',
        slug: 'write-code',
        form: [
            {
                label: 'Programming Language',
                field: 'input',
                name: 'language',
                required: true
            },
            {
                label: 'Requirements',
                field: 'textarea',
                name: 'requirements',
                required: true
            },
            {
                label: 'Additional Specifications',
                field: 'textarea',
                name: 'specs'
            }
        ]
    },
    {
        name: 'Code Explainer',
        desc: 'Get detailed explanations for code snippets',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        aiPrompt: 'Provide a detailed explanation of the code, including its functionality, structure, and potential improvements.',
        slug: 'explain-code',
        form: [
            {
                label: 'Code Snippet',
                field: 'textarea',
                name: 'code',
                required: true
            },
            {
                label: 'Programming Language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    }
];