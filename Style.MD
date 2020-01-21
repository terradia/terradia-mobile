#Style terradia mobile

##Touchable opacity
> opacity => 0.7
 
##Radius
> 10

##Packages
> https://github.com/benevbright/react-navigation-collapsible
> https://fettblog.eu/typescript-react/components/

##Elevation

```
...Platform.select({
                ios: {
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: -3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3
                },
                android: {
                    elevation: 20
                }
            }), 
```
            
## Tuto

> https://amanhimself.dev/build-a-custom-modal-with-the-animated-api-in-react-native
> https://amanhimself.dev/blog