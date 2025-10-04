import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from streamlit_option_menu import option_menu
import base64
from datetime import datetime
import json

# Page configuration
st.set_page_config(
    page_title="Saurabh Parthe - Software Engineer & Full Stack Developer",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded",
    menu_items={
        'Get Help': 'https://github.com/parthesaurabh1616',
        'Report a bug': "https://github.com/parthesaurabh1616/PARTESAURABHPORTFOLIO/issues",
        'About': "Building the future with code! 🚀"
    }
)

# Custom CSS for better styling
st.markdown("""
<style>
    .main-header {
        font-size: 4rem;
        font-weight: 800;
        text-align: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
    }
    
    .sub-header {
        font-size: 1.5rem;
        font-weight: 400;
        text-align: center;
        color: #64748b;
        margin-bottom: 3rem;
        line-height: 1.6;
    }
    
    .section-header {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1e293b;
        margin-top: 3rem;
        margin-bottom: 2rem;
        text-align: center;
    }
    
    .project-card {
        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        padding: 2rem;
        border-radius: 20px;
        margin: 1.5rem 0;
        color: #1e293b;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
    }
    
    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }
    
    .skill-badge {
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        margin: 0.5rem;
        display: inline-block;
        font-weight: 600;
        font-size: 0.9rem;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
    }
    
    .skill-badge:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
    
    .metric-card {
        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        text-align: center;
        margin: 1rem;
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
    }
    
    .metric-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    }
    
    .metric-number {
        font-size: 3rem;
        font-weight: 800;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
    }
    
    .metric-label {
        font-size: 1.1rem;
        color: #64748b;
        font-weight: 500;
    }
    
    .contact-info {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 3rem;
        border-radius: 25px;
        color: white;
        text-align: center;
        box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
    }
    
    .testimonial-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        margin: 1rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        border-left: 5px solid #667eea;
    }
    
    .value-card {
        background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
        padding: 2rem;
        border-radius: 20px;
        margin: 1rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        text-align: center;
        border: 1px solid #e2e8f0;
    }
    
    .value-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .cta-button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        display: inline-block;
        margin: 1rem;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
    }
    
    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
    }
    
    .hero-section {
        background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
        padding: 4rem 2rem;
        border-radius: 30px;
        margin: 2rem 0;
        text-align: center;
    }
    
    .typing-animation {
        font-size: 2rem;
        font-weight: 600;
        color: #1e293b;
        margin: 2rem 0;
    }
    
    .social-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .social-link {
        font-size: 2rem;
        color: #667eea;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .social-link:hover {
        transform: scale(1.2);
        color: #764ba2;
    }
</style>
""", unsafe_allow_html=True)

# Navigation
with st.sidebar:
    selected = option_menu(
        menu_title="Navigation",
        options=["Home", "About", "Skills", "Projects", "Contact"],
        icons=["house", "person", "gear", "folder", "envelope"],
        menu_icon="cast",
        default_index=0,
        styles={
            "container": {"padding": "0!important", "background-color": "#fafafa"},
            "icon": {"color": "#667eea", "font-size": "20px"},
            "nav-link": {
                "font-size": "16px",
                "text-align": "left",
                "margin": "0px",
                "--hover-color": "#eee",
            },
            "nav-link-selected": {"background-color": "#667eea"},
        }
    )

# Home Page
if selected == "Home":
    # Hero Section
    st.markdown("""
    <div class="hero-section">
        <h1 class="main-header">Saurabh Parthe</h1>
        <div class="typing-animation">
            Software Engineer & Full Stack Developer
        </div>
        <p class="sub-header">
            Building the future with code. I don't just write features, I architect scalable solutions 
            that drive real business results and create amazing user experiences.
        </p>
        
        <div class="social-links">
            <a href="https://github.com/parthesaurabh1616" class="social-link">🐙</a>
            <a href="https://linkedin.com/in/saurabh" class="social-link">💼</a>
            <a href="mailto:saurabh@example.com" class="social-link">📧</a>
            <a href="https://twitter.com/saurabh" class="social-link">🐦</a>
        </div>
        
        <div style="margin-top: 3rem;">
            <a href="#contact" class="cta-button">Let's Work Together</a>
            <a href="#projects" class="cta-button">View My Work</a>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    # Key Metrics - Inspired by top portfolios
    st.markdown('<h2 class="section-header">Why Choose Me?</h2>', unsafe_allow_html=True)
    
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-number">5.0</div>
            <div class="metric-label">⭐ Client Rating</div>
            <p style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">Perfect score across all projects</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-number">50+</div>
            <div class="metric-label">🚀 Projects Delivered</div>
            <p style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">From startups to enterprises</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-number">100%</div>
            <div class="metric-label">⚡ On-Time Delivery</div>
            <p style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">Never missed a deadline</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col4:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-number">24/7</div>
            <div class="metric-label">🌍 Available</div>
            <p style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">Ready for new challenges</p>
        </div>
        """, unsafe_allow_html=True)
    
    # Core Values Section
    st.markdown('<h2 class="section-header">Core Values</h2>', unsafe_allow_html=True)
    
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.markdown("""
        <div class="value-card">
            <div class="value-icon">🏆</div>
            <h3 style="color: #1e293b; margin-bottom: 1rem;">Excellence</h3>
            <p style="color: #64748b;">Clean code, sustainable architecture, and exceptional user experiences are my mantras.</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3 style="color: #1e293b; margin-bottom: 1rem;">Accountable</h3>
            <p style="color: #64748b;">I stand for my decisions, achievements, and mistakes. Complete transparency in everything.</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
        <div class="value-card">
            <div class="value-icon">❤️</div>
            <h3 style="color: #1e293b; margin-bottom: 1rem;">Passion</h3>
            <p style="color: #64748b;">I love what I do, and you'll notice it in every line of code and every interaction.</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col4:
        st.markdown("""
        <div class="value-card">
            <div class="value-icon">🤗</div>
            <h3 style="color: #1e293b; margin-bottom: 1rem;">Kindness</h3>
            <p style="color: #64748b;">Always eager to help, understand your needs, and make the journey enjoyable.</p>
        </div>
        """, unsafe_allow_html=True)
    
    # Client Testimonials
    st.markdown('<h2 class="section-header">What Clients Say</h2>', unsafe_allow_html=True)
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("""
        <div class="testimonial-card">
            <p style="font-style: italic; margin-bottom: 1rem; font-size: 1.1rem;">
                "Saurabh delivered exactly what I was looking for, on time and on budget. 
                His attention to detail and communication skills are exceptional."
            </p>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">JD</div>
                <div>
                    <strong>John Doe</strong><br>
                    <span style="color: #64748b;">CTO, TechStart Inc.</span>
                </div>
            </div>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="testimonial-card">
            <p style="font-style: italic; margin-bottom: 1rem; font-size: 1.1rem;">
                "Working with Saurabh was a game-changer. He not only delivered high-quality code 
                but also provided valuable insights that improved our entire system architecture."
            </p>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">SM</div>
                <div>
                    <strong>Sarah Miller</strong><br>
                    <span style="color: #64748b;">Lead Developer, InnovateCorp</span>
                </div>
            </div>
        </div>
        """, unsafe_allow_html=True)

# About Page
elif selected == "About":
    st.markdown('<h1 class="main-header">About Me</h1>', unsafe_allow_html=True)
    
    col1, col2 = st.columns([1, 1])
    
    with col1:
        st.markdown("""
        ## 🎯 My Journey
        
        I'm a passionate **Software Engineer** with expertise in building scalable applications and cloud infrastructure. 
        My journey in tech started with curiosity about how things work behind the scenes, and since then, I've been 
        passionate about learning new technologies and building innovative solutions.
        
        ## 🚀 What I Do
        
        - **Full Stack Development**: Building end-to-end applications with modern frameworks
        - **Cloud Architecture**: Designing and implementing scalable cloud solutions
        - **DevOps**: Automating workflows and infrastructure management
        - **Software Engineering**: Creating robust, maintainable code
        """)
    
    with col2:
        # Skills Progress Chart
        skills_data = {
            'Skill': ['Python', 'JavaScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
            'Level': [90, 85, 88, 82, 85, 80, 75, 78]
        }
        
        df_skills = pd.DataFrame(skills_data)
        
        fig = px.bar(df_skills, x='Level', y='Skill', orientation='h',
                    title="Technical Skills Level",
                    color='Level',
                    color_continuous_scale='viridis')
        
        fig.update_layout(
            height=400,
            showlegend=False,
            xaxis_title="Proficiency Level (%)",
            yaxis_title="Skills"
        )
        
        st.plotly_chart(fig, use_container_width=True)

# Skills Page
elif selected == "Skills":
    st.markdown('<h1 class="main-header">Technical Skills</h1>', unsafe_allow_html=True)
    
    # Frontend Skills
    st.markdown('<h2 class="section-header">Frontend Development</h2>', unsafe_allow_html=True)
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.markdown('<span class="skill-badge">React</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Next.js</span>', unsafe_allow_html=True)
    with col2:
        st.markdown('<span class="skill-badge">TypeScript</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Tailwind CSS</span>', unsafe_allow_html=True)
    with col3:
        st.markdown('<span class="skill-badge">JavaScript</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">HTML5</span>', unsafe_allow_html=True)
    with col4:
        st.markdown('<span class="skill-badge">CSS3</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Framer Motion</span>', unsafe_allow_html=True)
    
    # Backend Skills
    st.markdown('<h2 class="section-header">Backend Development</h2>', unsafe_allow_html=True)
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.markdown('<span class="skill-badge">Node.js</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Python</span>', unsafe_allow_html=True)
    with col2:
        st.markdown('<span class="skill-badge">Express.js</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">FastAPI</span>', unsafe_allow_html=True)
    with col3:
        st.markdown('<span class="skill-badge">PostgreSQL</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">MongoDB</span>', unsafe_allow_html=True)
    with col4:
        st.markdown('<span class="skill-badge">Redis</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">GraphQL</span>', unsafe_allow_html=True)
    
    # Cloud & DevOps Skills
    st.markdown('<h2 class="section-header">Cloud & DevOps</h2>', unsafe_allow_html=True)
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.markdown('<span class="skill-badge">AWS</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Azure</span>', unsafe_allow_html=True)
    with col2:
        st.markdown('<span class="skill-badge">Docker</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Kubernetes</span>', unsafe_allow_html=True)
    with col3:
        st.markdown('<span class="skill-badge">Terraform</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Git</span>', unsafe_allow_html=True)
    with col4:
        st.markdown('<span class="skill-badge">CI/CD</span>', unsafe_allow_html=True)
        st.markdown('<span class="skill-badge">Linux</span>', unsafe_allow_html=True)
    
    # Skills Distribution Chart
    st.markdown('<h2 class="section-header">Skills Distribution</h2>', unsafe_allow_html=True)
    
    skills_dist = {
        'Category': ['Frontend', 'Backend', 'Cloud & DevOps', 'Data Science', 'Tools'],
        'Percentage': [25, 30, 25, 15, 5]
    }
    
    df_dist = pd.DataFrame(skills_dist)
    
    fig_pie = px.pie(df_dist, values='Percentage', names='Category',
                    title="Skills Distribution",
                    color_discrete_sequence=px.colors.qualitative.Set3)
    
    st.plotly_chart(fig_pie, use_container_width=True)

# Projects Page
elif selected == "Projects":
    st.markdown('<h1 class="main-header">Featured Projects</h1>', unsafe_allow_html=True)
    
    # Project 1
    with st.expander("🚀 AI-Powered E-Commerce Platform", expanded=True):
        st.markdown("""
        <div class="project-card">
            <h3>Full-stack e-commerce solution with ML recommendations and real-time analytics</h3>
            <p><strong>Technologies:</strong> Next.js, TypeScript, Node.js, PostgreSQL, AWS, Docker, TensorFlow</p>
            <p><strong>Description:</strong> A sophisticated e-commerce platform featuring AI-powered product recommendations, 
            real-time inventory management, and advanced analytics dashboard.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>AI-powered product recommendations using collaborative filtering</li>
                <li>Real-time inventory management with WebSocket updates</li>
                <li>Advanced search with Elasticsearch integration</li>
                <li>Payment processing with Stripe and PayPal</li>
                <li>Admin dashboard with analytics and reporting</li>
            </ul>
            
            <h4>Architecture:</h4>
            <p><strong>Frontend:</strong> Next.js 14 with TypeScript, Tailwind CSS, Zustand state management</p>
            <p><strong>Backend:</strong> Node.js with Express.js, JWT authentication, Redis caching</p>
            <p><strong>Database:</strong> PostgreSQL with Prisma ORM, Redis for session management</p>
            <p><strong>Cloud:</strong> AWS EC2, RDS, S3, CloudFront CDN, Lambda functions</p>
        </div>
        """, unsafe_allow_html=True)
        
        col1, col2 = st.columns(2)
        with col1:
            if st.button("🔗 View GitHub Repository", key="proj1_github"):
                st.markdown("[GitHub Repository](https://github.com/parthesaurabh1616/ai-ecommerce-platform)")
        with col2:
            if st.button("🌐 Live Demo", key="proj1_demo"):
                st.markdown("[Live Demo](https://ai-ecommerce-demo.vercel.app)")
    
    # Project 2
    with st.expander("☁️ Multi-Cloud Infrastructure Automation"):
        st.markdown("""
        <div class="project-card">
            <h3>Infrastructure as Code solution for AWS, Azure, and GCP with automated monitoring</h3>
            <p><strong>Technologies:</strong> Terraform, Kubernetes, AWS, Azure, GCP, Docker, Python, Ansible</p>
            <p><strong>Description:</strong> Comprehensive Infrastructure as Code solution supporting multi-cloud deployments 
            across AWS, Azure, and GCP with automated provisioning and monitoring.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Multi-cloud Terraform modules (AWS, Azure, GCP)</li>
                <li>Kubernetes cluster auto-scaling and management</li>
                <li>Comprehensive monitoring with Prometheus, Grafana, and ELK stack</li>
                <li>Automated CI/CD pipelines with GitHub Actions and Azure DevOps</li>
                <li>Cost optimization with automated resource scheduling</li>
            </ul>
            
            <h4>Architecture:</h4>
            <p><strong>Infrastructure:</strong> Terraform modules for multi-cloud resource provisioning</p>
            <p><strong>Orchestration:</strong> Kubernetes with Helm charts for application deployment</p>
            <p><strong>Monitoring:</strong> Prometheus, Grafana, ELK stack, and custom dashboards</p>
        </div>
        """, unsafe_allow_html=True)
        
        col1, col2 = st.columns(2)
        with col1:
            if st.button("🔗 View GitHub Repository", key="proj2_github"):
                st.markdown("[GitHub Repository](https://github.com/parthesaurabh1616/multi-cloud-infra)")
        with col2:
            if st.button("🌐 Live Demo", key="proj2_demo"):
                st.markdown("[Live Demo](https://infra-docs.vercel.app)")
    
    # Project 3
    with st.expander("💬 Real-time Collaboration Platform"):
        st.markdown("""
        <div class="project-card">
            <h3>WebSocket-based collaboration tool with video conferencing and document sharing</h3>
            <p><strong>Technologies:</strong> React, Socket.io, WebRTC, MongoDB, Node.js, Redis, Docker</p>
            <p><strong>Description:</strong> Advanced real-time collaboration platform supporting video conferencing, 
            document collaboration, screen sharing, and team management.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Real-time video conferencing with WebRTC</li>
                <li>Collaborative document editing with operational transforms</li>
                <li>Screen sharing and whiteboard functionality</li>
                <li>File sharing with version control</li>
                <li>Team management and role-based permissions</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)
        
        col1, col2 = st.columns(2)
        with col1:
            if st.button("🔗 View GitHub Repository", key="proj3_github"):
                st.markdown("[GitHub Repository](https://github.com/parthesaurabh1616/collaboration-platform)")
        with col2:
            if st.button("🌐 Live Demo", key="proj3_demo"):
                st.markdown("[Live Demo](https://collab-platform.vercel.app)")
    
    # Project Statistics
    st.markdown('<h2 class="section-header">Project Statistics</h2>', unsafe_allow_html=True)
    
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.metric("Total Projects", "50+", "12 this year")
    
    with col2:
        st.metric("Technologies Used", "25+", "5 new")
    
    with col3:
        st.metric("GitHub Stars", "150+", "25 this month")

# Contact Page
elif selected == "Contact":
    st.markdown('<h1 class="main-header">Get In Touch</h1>', unsafe_allow_html=True)
    
    col1, col2 = st.columns([1, 1])
    
    with col1:
        st.markdown("""
        <div class="contact-info">
            <h2>Let's Connect!</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or just have a chat about technology. Let's connect!
            </p>
            
            <div style="text-align: left; margin: 2rem 0;">
                <h3>📧 Email</h3>
                <p>saurabh@example.com</p>
                
                <h3>📱 Phone</h3>
                <p>+1 (555) 123-4567</p>
                
                <h3>📍 Location</h3>
                <p>San Francisco, CA</p>
                
                <h3>💼 LinkedIn</h3>
                <p>linkedin.com/in/saurabh</p>
                
                <h3>🐙 GitHub</h3>
                <p>github.com/parthesaurabh1616</p>
            </div>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("### Send me a message")
        
        with st.form("contact_form"):
            name = st.text_input("Name")
            email = st.text_input("Email")
            subject = st.text_input("Subject")
            message = st.text_area("Message", height=200)
            
            submitted = st.form_submit_button("Send Message")
            
            if submitted:
                st.success("Thank you for your message! I'll get back to you soon.")
    
    # Current Status
    st.markdown('<h2 class="section-header">Current Status</h2>', unsafe_allow_html=True)
    
    status_col1, status_col2, status_col3 = st.columns(3)
    
    with status_col1:
        st.markdown("""
        <div class="metric-card">
            <h3 style="color: #28a745;">🟢 Available</h3>
            <p>Open to new opportunities</p>
        </div>
        """, unsafe_allow_html=True)
    
    with status_col2:
        st.markdown("""
        <div class="metric-card">
            <h3 style="color: #667eea;">⚡ Active</h3>
            <p>Currently working on projects</p>
        </div>
        """, unsafe_allow_html=True)
    
    with status_col3:
        st.markdown("""
        <div class="metric-card">
            <h3 style="color: #ffc107;">🚀 Learning</h3>
            <p>Exploring new technologies</p>
        </div>
        """, unsafe_allow_html=True)

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #666; padding: 2rem;">
    <p>© 2025 Saurabh Parthe. Made with ❤️ using Streamlit</p>
    <p>🚀 Always learning, always building</p>
</div>
""", unsafe_allow_html=True)
