# views.py
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    print(args, kwargs)
    print(request.user)
    # return HttpResponse("<h1>Hellow World</h1>")
    return render(request, "base.html", {})






def contact_us(request):
    if request.method == 'POST':
        first_name = request.POST.get('first-name')
        last_name = request.POST.get('last-name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        place = request.POST.get('place')
        type_of_work = request.POST.get('type-of-work')

        # Construct the email content
        subject = 'New Contact Form Submission'
        message = f"""
        You have a new inquiry:
        First Name: {first_name}
        Last Name: {last_name}
        Phone: {phone}
        Email: {email}
        Place: {place}
        Type of Work: {type_of_work}
        """
        
        # Send the email
        send_mail(
            subject,  
            message,  
            'your-email@gmail.com',  
            ['recipient-email@gmail.com'],  
            fail_silently=False,  
        )

        return HttpResponse("Form submitted successfully. We'll contact you soon!")
    
    return render(request, 'contact_form.html')  # Ensure you have this template
